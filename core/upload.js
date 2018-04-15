const fs = require('fs')
const aws = require('aws-sdk')
const uuidv4 = require('uuid/v4')

/**
 * Upload compiled component to s3.
 * @param {Object} config - Configuration settings.
 * @param {String} componentPath - Path of compiled component to upload.
 * @returns {Promise}
 */
module.exports = function(config, componentPath) {
  // # fetch component source
  const component = fs.readFileSync(componentPath).toString('utf8')
  // # setup aws clients
  aws.config.update(require('./aws.config.json'))
  s3 = new aws.S3()
  var params = {
    Bucket: config.aws.s3Bucket,
    Key: `${config.widget.name}-${uuidv4().toString('utf8')}.js`,
    Body: component,
    ACL: 'public-read'
  }
  var options = { partSize: 10 * 1024 * 1024, queueSize: 1 }
  // # upload component to s3 and return object href
  return new Promise(() => {
    s3.upload(params, options, (error, data) => {
      if (error)
        reject(error)
      resolve(data.Location)
    })
  })
}
