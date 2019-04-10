// @preval
const { resolve } = require('path')
const sass = require('node-sass')
const tildeImporter = require('node-sass-tilde-importer')
const { EOL } = require('os')
const setWith = require('lodash.setwith')
const camelCase = require('lodash.camelcase')
const ColorString = require('color-string')
const ColorConvert = require('color-convert')

module.exports = sass
  .renderSync({
    file: resolve(__dirname, '../scss/_exports.scss'),
    importer: [tildeImporter],
  })
  .css.toString()
  .split(EOL)
  .reduce((acc, line) => {
    try {
      const { 1: key, 2: value } = line.trim().match(/(.+):\s(.+);/)

      let coerced
      if (value === 'true') coerced = true
      else if (value === 'false') coerced = false
      else coerced = value

      // force hex, note: just fixing known broken vals here. Changing in scss could break here
      if (['whitesmoke', 'gray'].indexOf(coerced) > -1) {
        const { model, value } = ColorString.get(coerced)
        coerced = `#${ColorConvert[model].hex(value).toLowerCase()}`
      }

      return setWith(
        acc,
        key
          .split('_')
          .map(camelCase)
          .map(String),
        coerced,
        Object
      )
    } catch (err) {}
    return acc
  }, {})
