import { mkPathFn } from '../utils'
import { AxePuppeteer } from 'axe-puppeteer'
const path = mkPathFn({ port: 3000 })

describe('Badges', () => {
  it('are accessible', async () => {
    await page.goto(path('/components/badge/splat'))
    const title = await page.$eval('h1', $el => $el.textContent)
    expect(title).toBe('Badge Splats')

    let results

    await page.select('#a11y-badge-background-color-picker', 'white')
    results = await new AxePuppeteer(page).analyze()
    expect(results).toBeA11yOk()

    await page.select('#a11y-badge-background-color-picker', 'light')
    results = await new AxePuppeteer(page).analyze()
    expect(results).toBeA11yOk()

    await page.select('#a11y-badge-background-color-picker', 'breath')
    results = await new AxePuppeteer(page).analyze()
    expect(results).toBeA11yOk()
  })
})
