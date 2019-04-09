import * as Components from './index'

describe('@cwds/cares', () => {
  it.each`
    component
    ${'Alert'}
    ${'AlertUncontrolled'}
    ${'Avatar'}
    ${'Button'}
    ${'CaresProvider'}
    ${'Logo'}
    ${'Menu'}
    ${'UncontrolledMenu'}
    ${'MenuItem'}
    ${'UserMenu'}
    ${'UncontrolledUserMenu'}
    ${'Page'}
    ${'UncontrolledUserMenu'}
    ${'Tile'}
    ${'TileGroup'}
    ${'TilePlaceholder'}
    ${'CaresProvider'}
  `('exports $component', ({ component }) => {
    expect(Components[component]).toBeDefined()
  })

  describe('Utils', () => {
    let Utils
    beforeEach(() => {
      Utils = Components.Utils
    })
    it.each`
      namedExport
      ${'renderElementOrComponent'}
    `('exports $namedExport', ({ namedExport }) => {
      expect(Utils[namedExport]).toBeDefined()
    })
  })
})
