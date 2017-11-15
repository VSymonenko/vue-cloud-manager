const fs = require('fs')
const { exec } = require('child_process')
const chalk = require('chalk')
const ora = require('ora')
const spinner = ora()

/* start */
start = () => {
  return new Promise((resolve, reject) => {
    exec('@echo off', (error, stdout, stderr) => {
      if (error instanceof Error) {
          console.error(error)
          throw error
      }
      process.stdout.write('\033c')
      process.stdout.write('\r\n')
      resolve(true)
    })
  })
}

/* run test */
test = () => {
  return new Promise((resolve, reject) => {
    spinner.start('testing...')
    exec('npm run test', (error, stdout, stderr) => {
      if (error instanceof Error) {
          console.error(error)
          throw error
      }
      // console.log('stdout: ', stdout)
      if (stderr.length == 0) {
        spinner.succeed('Testing passed ok')
        process.stdout.write('\r\n')
        resolve(true)
      }
    })
  })
}

// /* update package version*/
newVersion = () => {
  const ver = JSON.parse(fs.readFileSync('./package.json')).version
  return version = ver.slice(0, 4) + (parseInt(ver[4] + ver[5]) + 1)
}

var version = newVersion()

updatePackageVersion = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./package.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err)
      } else {
        obj = JSON.parse(data)
        obj.version = version
        json = JSON.stringify(obj, null, 2)
        fs.writeFile('package.json', json, 'utf8', (cb) => {
          spinner.succeed('Realese version: ' + version + '\n')
          resolve(true)
        })
      }
    })
  })
}

/* build component*/
build = () => {
  spinner.start('building...')
  return new Promise((resolve, reject) => {
    exec('node build/building-lib.js', (error, stdout, stderr) => {
      if (error instanceof Error) {
        console.error(error)
        throw error
      }
      if (stderr.length == 0) {
        spinner.stop()
        console.log(stdout) 
        resolve(true)
      }
    })
  })
}

/* publish */
npmPublish = () => {
  spinner.start('publish...')
  return new Promise((resolve, reject) => {
    exec('npm publish', (error, stdout, stderr) => {
      if (error instanceof Error) {
          console.error(error)
          throw error
      }
      console.log(stdout)
      if (stderr.length == 0) {
        spinner.succeed('Publish npm package done.' + '\n')
        resolve(true)
      }
    })
  })
}

/* commit */
gitAdd = () => {
  return new Promise((resolve, reject) => {
    exec('git add .', (error, stdout, stderr) => {
      if (error instanceof Error) {
        console.error(error)
        throw error
      }
      if (stderr.length == 0) {
        spinner.succeed('Add all file to repository.' + '\n')
        resolve(true)
      }
    })
  })
}

gitCommit = () => {
  return new Promise((resolve, reject) => {
    exec('git commit -m \"release: ' + version + '\"', (error, stdout, stderr) => {
      if (error instanceof Error) {
        console.error(error)
        throw error
      }
      if (stderr.length == 0) {
        spinner.succeed('Commit done.' + '\n')
        resolve(true)
      }
    })
  })
}

gitPush = () => {
  return new Promise((resolve, reject) => {
    exec('git push', (error, stdout, stderr) => {
      if (error instanceof Error) {
        console.error(error)
        throw error
      }
      if (error == null) {
        spinner.succeed('Push done.' + '\n')
        resolve(true)
      }
    })
  })
}

success = () => {
  console.log(chalk.green('New version ' + version + ' released!' + '\n'))
}

publish = async () => {
  await start()
  await test()
  await updatePackageVersion()
  await gitAdd()
  await gitCommit()
  await gitPush()
  await build()
  await npmPublish()
  success()
}

publish()