// const jest = require('jest').
// const { defaults } = require('jest-config')

module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.pptr\\.test\\.js$',
  setupFilesAfterEnv: ['./setupTests.js'],
}
