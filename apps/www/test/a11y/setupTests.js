expect.extend({
  toBeA11yOk(axeReport) {
    const pass = !axeReport.violations.length
    const message = JSON.stringify(axeReport.violations, null, 2)
    return {
      pass,
      message: () => message,
    }
  },
})

if (process.env.HEADLESS === 'false') jest.setTimeout(3600000)
