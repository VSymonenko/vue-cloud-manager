const fs = require('fs')
const updater = require('jsonfile-updater')
const { exec } = require('child_process')
const chalk = require('chalk')

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
      if (stderr.length === 0) {
        console.log('Add all file.' + '\n')
        resolve(true)
      }
    })
  })
}

gitCommit = () => {
  return new Promise((resolve, reject) => {
    exec('git commit -m \"release: ' + version + '\"', (error, stdout, stderr)=> {
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
  await gitAdd()
  await gitCommit()
  await gitPush()
  await npmPublish()
  success()
}

// /* update package version*/
newVersion = () => {
  const ver = JSON.parse(fs.readFileSync('./package.json')).version
  return version = ver.slice(0, 4) + (parseInt(ver[4]) + 1)
}

var version = newVersion()

updatePackageVersion = () => { updater('./package.json').set('version', version, function(err) {
    if (err) return console.log(err)
      console.log('\n' + 'Realese version: ' + version + '\n')
      publish()
  })
}

/* run test */
exec('npm run test', (error, stdout, stderr) => {
  if (error instanceof Error) {
      console.error(error)
      throw error
  }
  // console.log('stdout: ', stdout)
  if (stderr.length == 0) {
    console.log('Test ok' + '\n')
    updatePackageVersion()
  }
})