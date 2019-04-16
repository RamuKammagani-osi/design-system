expect.extend({
  toBeA11yOk(axeReport) {
    const pass = !axeReport.violations.length
    const message = `You suck!` // axeReport.violations
    return {
      pass,
      message: () => message,
    }
  },
})

jest.setTimeout(3600000)
