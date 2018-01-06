const fs = require('fs')

fs.createReadStream('dist/vue-cloud-manager.js').pipe(fs.createWriteStream('examples/simple/vue-cloud-manager.js'))
