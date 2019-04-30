import * as NamedExports from './index'

describe('@cwds/forms', () => {
  it.each`
    namedExport
    ${'CheckboxBank'}
    ${'RadioGroup'}
  `('exports $namedExport', ({ namedExport }) => {
    expect(Object.keys(NamedExports)).toContain(namedExport)
  })
})
