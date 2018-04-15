const fs = require('fs')
const path = require ('path')
const hbs = require('handlebars')

/**
 * Generates provided template.
 * @param {Object} config - Configuration settings.
 * @param {String} componentLocation - Location to component object on s3.
 */
module.exports = function(config, componentLocation) {
  console.log('Fetching template source...')
  const source = fs.readFileSync(path.join(__dirname, '../src/template.hbs'))
  console.log('Processing template...')
  const template = hbs.compile(source)({ location: componentLocation })
  fs.writeFileSync(path.join(__dirname, '../dist/template.html'), template, 'utf8')
  console.log('Template built')
}
