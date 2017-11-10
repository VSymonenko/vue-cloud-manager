const fs = require('fs')
const { exec } = require('child_process')
const chalk = require('chalk')

/* run test */
test = () => {
  return new Promise((resolve, reject) => {
    exec('npm run test', (error, stdout, stderr) => {
      if (error instanceof Error) {
          console.error(error)
          throw error
      }
      // console.log('stdout: ', stdout)
      if (stderr.length == 0) {
        console.log('\n' + 'Test ok' + '\n')
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
          console.log('\n' + 'Realese version: ' + version + '\n')
          resolve(true)
        })
      }
    })
  })
}

/* build component*/
build = () => {
  return new Promise((resolve, reject) => {
    exec('node build/building-lib.js', (error, stdout, stderr) => {
      if (error instanceof Error) {
        console.error(error)
        throw error
      }
      console.log('stdout: ', stdout)
      if (stderr.length == 0) {
        console.log('Component build done.' + '\n')
        resolve(true)
      }
    })
  })
}

/* publish */
npmPublish = () => {
  return new Promise((resolve, reject) => {
    exec('npm publish', (error, stdout, stderr) => {
      if (error instanceof Error) {
          console.error(error)
          throw error
      }
      console.log('stdout: ', stdout)
      if (stderr.length == 0) {
        console.log('Publish npm package.' + '\n')
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
        console.log('Add all file.' + '\n')
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
        console.log('Commit done.' + '\n')
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
      console.log('error: ', error)
      console.log('stdout: ', stdout)
      console.log('stderr: ', stderr)
      if (stderr.length == 0) {
        console.log('Push done.' + '\n')
        resolve(true)
      }
    })
  })
}

success = () => {
  console.log(chalk.green('New version ' + version + ' released.' + '\n'))
}

publish = async () => {
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