import { mkPathFn } from '../utils'
import { AxePuppeteer } from 'axe-puppeteer'
const path = mkPathFn({ port: 3000 })

describe('Badges', () => {
  it('are accessible', async () => {
    await page.goto(path('/components/badge/splat'))
    const title = await page.$eval('h1', $el => $el.textContent)
    expect(title).toBe('Badge Splats')
    const results = await new AxePuppeteer(page)
      // .options({ resultTypes: ['violations'] })
      .analyze()
    // expect(results.violations).toHaveLength(0)
    expect(results).toBeA11yOk()
  })
})
