import { mkPathFn } from '../utils'
import { AxePuppeteer } from 'axe-puppeteer'
const path = mkPathFn({ port: 3000 })

describe('Buttons', () => {
  it('are accessible', async () => {
    await page.goto(path('/components/button/splat'))
    const title = await page.$eval('h1', $el => $el.textContent)
    expect(title).toBe('Button Splats')
    const results = await new AxePuppeteer(page).analyze()
    expect(results.violations).toHaveLength(0)
  })
})
