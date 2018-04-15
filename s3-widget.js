const build = require('./core/build')
const template = require('./core/template')
const upload = require('./core/upload')

const config = require('./config.json')

const ARGUMENTS = {
  BUILD: '--build',
  TEMPLATE: '--template'
}

process.argv.forEach(function (val, index, array) {
  if (val == ARGUMENTS.BUILD) {
    const path = build(config)
    upload(config, path).then(() => {
      process.exit()
    })
  }
  if (val == ARGUMENTS.TEMPLATE) {
    const path = build(config)
    upload(config, path).then(location => {
      template(config, location)
      process.exit()
    })
  }
})
