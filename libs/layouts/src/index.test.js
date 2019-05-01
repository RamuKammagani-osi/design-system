import * as layouts from './index'

describe('@cwds/layouts', () => {
  it.each`
    layout
    ${'AppBar'}
    ${'Banner'}
    ${'Body'}
    ${'Footer'}
    ${'Page'}
  `('exports $layouts', ({ layout }) => {
    expect(layouts[layout]).toBeDefined()
  })
})
