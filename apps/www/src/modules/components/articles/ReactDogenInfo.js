import docgenComposed from '../../../macros/docgen-composed.macro'

export default {
  Alert: docgenComposed(
    '@cwds/cares/src/Alert/Alert.jsx',
    'reactstrap/src/Alert.js'
  ),
  Avatar: docgenComposed('@cwds/cares/src/Avatar/Avatar.jsx'),
  Badge: docgenComposed('reactstrap/src/Badge.js'),
  Breadcrumb: docgenComposed('reactstrap/src/Breadcrumb.js'),
  BreadcrumbItem: docgenComposed('reactstrap/src/BreadcrumbItem.js'),
  Button: docgenComposed('reactstrap/src/Button.js'),
  ButtonGroup: docgenComposed('reactstrap/src/ButtonGroup.js'),
  Card: docgenComposed('reactstrap/src/Card.js'),
  Col: docgenComposed('reactstrap/src/Col.js'),
  Container: docgenComposed('reactstrap/src/Container.js'),
  Infotip: docgenComposed('@cwds/cares/src/Infotip/Infotip.jsx'),
  Input: docgenComposed('reactstrap/src/Input.js'),
  InputMask: docgenComposed('react-text-mask/src/reactTextMask.js'),
  Icon: docgenComposed(
    '@cwds/icons/src/Icon.jsx',
    '@cwds/icons/src/fontawesome.props'
  ),
  Menu: docgenComposed('reactstrap/src/Dropdown.js'),
  MenuItem: docgenComposed('reactstrap/src/DropdownMenu.js'),
  Modal: docgenComposed('reactstrap/src/Modal.js'),
  Row: docgenComposed('reactstrap/src/Row.js'),
  Tooltip: docgenComposed(
    'reactstrap/src/Tooltip.js',
    'reactstrap/src/TooltipPopoverWrapper.js'
  ),
  Page: docgenComposed(
    '@cwds/layouts/src/Page/Page.jsx',
    '@cwds/layouts/src/Page/Page.props'
  ),
  Tile: docgenComposed('@cwds/cares/src/Tile/Tile.jsx'),
  CaresProvider: docgenComposed(
    '@cwds/cares/src/CaresContext/CaresProvider.props'
  ),
}
