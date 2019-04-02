import * as Components from './index'

describe('@cwds/components', () => {
  it.each`
    component
    ${'Alert'}
    ${'AlertUncontrolled'}
    ${'Avatar'}
    ${'Badge'}
    ${'Breadcrumb'}
    ${'BreadcrumbItem'}
    ${'Button'}
    ${'PrimitiveButton'}
    ${'ButtonGroup'}
    ${'ButtonToolbar'}
    ${'Card'}
    ${'CardBody'}
    ${'CardFooter'}
    ${'CardHeader'}
    ${'CardTitle'}
    ${'CaresProvider'}
    ${'Col'}
    ${'Collapse'}
    ${'Container'}
    ${'Dropdown'}
    ${'DropdownItem'}
    ${'DropdownMenu'}
    ${'DropdownToggle'}
    ${'Logo'}
    ${'MenuItem'}
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
