import * as Exports from './index'

// Any failures here should be a breaking change

describe('Tile module', () => {
  it.each`
    component
    ${'Tile'}
    ${'TilePlaceholder'}
    ${'TileGroup'}
  `('exports $component', ({ component }) => {
    expect(Exports[component]).toBeDefined()
  })
})
