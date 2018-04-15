const fs = require('fs')
const path = require ('path')
const riot = require('riot')
const hbs = require('handlebars')

/**
 * Compile component and drop to local file system
 * @param {Object} config - Configuration settings.
 * @returns {String}
 */
module.exports = function(config) {
  console.log('Building component...')
  const source = fs.readFileSync(path.join(__dirname, '../src/widget.tag')).toString('utf8')
  const tag = hbs.compile(source)({ name: config.widget.name })
  const component = riot.compile(tag.toString('utf8'))
  console.log('Component compiled')
  const componentPath = path.join(__dirname, `../dist/${config.widget.name}.js`)
  fs.writeFileSync(componentPath, component, 'utf8')
  console.log('Component built')
  return componentPath
}
