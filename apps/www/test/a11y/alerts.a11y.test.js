import { mkPathFn } from '../utils'
import { AxePuppeteer } from 'axe-puppeteer'
const path = mkPathFn({ port: 3000 })

describe('Alerts', () => {
  it('are accessible', async () => {
    await page.goto(path('/components/alert/splat'))
    const title = await page.$eval('h1', $el => $el.textContent)
    expect(title).toBe('Alert Splats')
    const results = await new AxePuppeteer(page).analyze()
    expect(results.violations).toHaveLength(0)
  })
})
