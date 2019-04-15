const { Builder, By, Key, until } = require('selenium-webdriver')
const AxeBuilder = require('axe-webdriverjs')

// const APP_ENDPOINT = 'http://www.google.com/ncr'
// const APP_ENDPOINT = 'https://dequeuniversity.com/demo/mars/'
// const APP_ENDPOINT = 'https://cws-cares.netlify.com/components/button/splat'
// const APP_ENDPOINT = 'http://host.docker.internal:3000/components/button/splat'

const driver = new Builder().forBrowser('chrome').build()

const mkPath = mkPathFn({ host: 'host.docker.internal', port: '3000' })

driver.get(mkPath('/components/button/splat')).then(() => {
  AxeBuilder(driver).analyze((err, results) => {
    if (err) {
      // Handle error somehow
    }
    console.log(results)
  })
})

//
// Helpers
//

function mkPathFn({ proto = 'http', host, port }) {
  return path => `${proto}://${host}${port ? `:${port}` : ''}${path}`
}
