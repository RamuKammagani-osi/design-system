const { Builder } = require('selenium-webdriver')
const AxeBuilder = require('axe-webdriverjs')
const mkPathFn = require('../utils').mkPathFn

// const APP_ENDPOINT = 'http://www.google.com/ncr'
// const APP_ENDPOINT = 'https://dequeuniversity.com/demo/mars/'
// const APP_ENDPOINT = 'https://cws-cares.netlify.com/components/button/splat'
// const APP_ENDPOINT = 'http://host.docker.internal:3000/components/button/splat'

const driver = new Builder().forBrowser('chrome').build()

// See https://docs.docker.com/docker-for-mac/networking/#use-cases-and-workarounds
const mkPath = mkPathFn({ host: 'host.docker.internal', port: '3000' })

driver.get(mkPath('/components/button/splat')).then(() => {
  AxeBuilder(driver).analyze((err, results) => {
    if (err) {
      // Handle error somehow
    }
    console.log(results)
  })
})
