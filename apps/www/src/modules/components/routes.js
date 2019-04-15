/* eslint-disable import/no-webpack-loader-syntax */
import Components from '!babel-loader!@mdx-js/loader!./articles/Components.mdx'
import DataGridsPage from '!babel-loader!@mdx-js/loader!./articles/DataGrid/DataGrid.mdx'
import SimpleDataGrid from '!babel-loader!@mdx-js/loader!./articles/DataGrid/SimpleDataGrid.mdx'
import BasicSearchDataGrid from '!babel-loader!@mdx-js/loader!./articles/DataGrid/BasicSearchDataGrid.mdx'
import SubcomponentDataGrid from '!babel-loader!@mdx-js/loader!./articles/DataGrid/SubcomponentDataGrid.mdx'
import Avatar from '!babel-loader!@mdx-js/loader!./articles/Avatar/Avatar.mdx'
import Alert from '!babel-loader!@mdx-js/loader!./articles/Alert/Alert.mdx'
import Badge from '!babel-loader!@mdx-js/loader!./articles/Badge/Badge.mdx'
import Breadcrumbs from '!babel-loader!@mdx-js/loader!./articles/Breadcrumbs/Breadcrumbs.mdx'
import BreadcrumbItem from '!babel-loader!@mdx-js/loader!./articles/BreadcrumbItem/BreadcrumbItem.mdx'
import Button from '!babel-loader!@mdx-js/loader!./articles/Button/Button.mdx'
import ButtonSplat from './articles/Button/Button.splat'
import PrimitiveButton from '!babel-loader!@mdx-js/loader!./articles/Button/PrimitiveButton.mdx'
import ButtonGroup from '!babel-loader!@mdx-js/loader!./articles/ButtonGroup/ButtonGroup.mdx'
import Card from '!babel-loader!@mdx-js/loader!./articles/Card/Card.mdx'
// import CardStructure from '!babel-loader!@mdx-js/loader!./articles/Card/CardStructure.mdx';
import Grid from '!babel-loader!@mdx-js/loader!./articles/Grid/Grid.mdx'
import Icon from '!babel-loader!@mdx-js/loader!./articles/Icon/Icon.mdx'
import Infotip from '!babel-loader!@mdx-js/loader!./articles/Infotip/Infotip.mdx'
import MenuPage from '!babel-loader!@mdx-js/loader!./articles/Menu/MenuPage.mdx'
import TooltipPage from '!babel-loader!@mdx-js/loader!./articles/Tooltip/TooltipPage.mdx'
import Modal from '!babel-loader!@mdx-js/loader!./articles/Modal/Modal.mdx'
import Page from '!babel-loader!@mdx-js/loader!./articles/Page/Page.mdx'
import CaresProvider from '!babel-loader!@mdx-js/loader!./articles/CaresProvider/CaresProvider.mdx'
import Tile from '!babel-loader!@mdx-js/loader!./articles/Tile/Tile.mdx'
import BadgeSplats from './articles/Badge/Badge.splat'

const routes = {
  title: 'Component Library',
  component: Components,
  path: '/components',
  children: [
    {
      title: 'Alert',
      path: '/alert',
      component: Alert,
    },
    {
      title: 'Avatar',
      path: '/avatar',
      component: Avatar,
    },
    {
      title: 'Badge',
      path: '/badge',
      component: Badge,
    },
    {
      path: '/badge/splat',
      title: 'Badge Splats',
      noShow: true,
      component: BadgeSplats,
    },
    {
      title: 'Breadcrumb',
      path: '/breadcrumb',
      component: Breadcrumbs,
    },
    {
      title: 'BreadcrumbItem',
      path: '/breadcrumb-item',
      component: BreadcrumbItem,
    },
    {
      title: 'Button',
      path: '/button',
      component: Button,
    },
    {
      path: '/button/splat',
      title: 'Button Splats',
      noShow: true,
      component: ButtonSplat,
    },
    {
      title: 'Primitive Button',
      path: '/primitive-button',
      component: PrimitiveButton,
      noShow: true,
    },
    {
      title: 'ButtonGroup',
      path: '/button-group',
      component: ButtonGroup,
    },
    {
      title: 'Cards',
      path: '/cards',
      component: Card,
      // children: [
      //   {
      //     title: 'Structure',
      //     path: 'structure',
      //     component: CardStructure,
      //   },
      //   {
      //     title: 'Loading State',
      //     path: 'loading',
      //     component: () => <div>TODO</div>,
      //   },
      //   {
      //     title: 'MultiState',
      //     path: 'multistate',
      //     component: () => <div>TODO</div>,
      //   },
      // ],
    },
    {
      title: 'Tile',
      path: '/tile',
      component: Tile,
    },
    // {
    //   title: 'CheckboxBank',
    //   path: '/checkboxbank',
    // },
    // {
    //   title: 'Collapse',
    //   path: '/collapse',
    // },
    {
      title: 'DataGrid',
      path: '/datagrid',
      component: DataGridsPage,
      noSort: true,
      children: [
        {
          title: 'Simple DataGrid',
          label: 'Simple',
          path: '/simple',
          component: SimpleDataGrid,
        },
        {
          title: 'DataGrid with Basic Search',
          label: 'Basic Search',
          path: '/basic-search',
          component: BasicSearchDataGrid,
        },
        {
          title: 'DataGrid with SubComponents',
          label: 'SubComponents',
          path: '/subcomponent-render',
          component: SubcomponentDataGrid,
        },
        // {
        //   title: 'Advanced Search (WiP)',
        //   path: '/advanced-search',
        //   component: AdvancedSearchDataGrid,
        // },
      ],
    },
    {
      title: 'Menu',
      path: '/menu',
      component: MenuPage,
    },
    // {
    //   title: 'Field',
    //   path: '/field',
    // },
    // {
    //   title: 'FormFeedback',
    //   path: '/formfeedback',
    // },
    // {
    //   title: 'FormGroup',
    //   path: '/formgroup',
    // },
    // {
    //   title: 'Forms',
    //   path: '/forms',
    // },
    {
      title: 'Grid',
      path: '/grid',
      component: Grid,
    },
    {
      title: 'Icon',
      path: '/icon',
      component: Icon,
    },
    {
      title: 'Infotip',
      path: '/infotip',
      component: Infotip,
    },
    // {
    //   title: 'Input',
    //   path: '/input',
    // },
    // {
    //   title: 'InputGroup',
    //   path: '/inputgroup',
    // },
    // {
    //   title: 'InputGroupAddon',
    //   path: '/inputgroupaddon',
    // },
    // {
    //   title: 'JumpToTop',
    //   path: '/jumptotop',
    // },
    // {
    //   title: 'Label',
    //   path: '/label',
    // },
    // {
    //   title: 'Layouts',
    //   path: '/layouts',
    // },
    // {
    //   title: 'Legend',
    //   path: '/legend',
    // },
    // {
    //   title: 'ListGroups',
    //   path: '/listgroups',
    // },
    // {
    //   title: 'Logo',
    //   path: '/logo',
    // },
    {
      title: 'Modal',
      path: '/modal',
      component: Modal,
    },
    // {
    //   title: 'Nav',
    //   path: '/nav',
    // },
    // {
    //   title: 'PageHeader',
    //   path: '/pageheader',
    // },
    // {
    //   title: 'Popover',
    //   path: '/popover',
    // },
    // {
    //   title: 'RadioGroup',
    //   path: '/radiogroup',
    // },
    // {
    //   title: 'Select',
    //   path: '/select',
    // },
    // {
    //   title: 'Toggle',
    //   path: '/toggle',
    // },
    {
      title: 'Tooltip',
      path: '/tooltip',
      component: TooltipPage,
    },
    {
      title: 'Page',
      path: '/page',
      component: Page,
    },
    {
      title: 'CaresProvider',
      path: '/component-provider',
      component: CaresProvider,
    },
  ],
}

export default routes
