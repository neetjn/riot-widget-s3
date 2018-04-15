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
  const source = fs.readFileSync(path.join(__dirname, '../src/widget.tag'))
  const tag = hbs.compile(template)({ name: config.widget.name })
  const component = riot.compile(tag.toString('utf8'))
  const componentPath = path.join(__dirname, `../dist/${config.wiget.name}.js`)
  fs.writeFileSync(componentPath, component, 'utf8')
  return componentPath
}
