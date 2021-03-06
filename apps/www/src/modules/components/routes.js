/* eslint-disable import/no-webpack-loader-syntax */
import Components from '!babel-loader!@mdx-js/loader!./articles/Components.mdx'
import DataGridsPage from '!babel-loader!@mdx-js/loader!./articles/DataGrid/DataGrid.mdx'
import SimpleDataGrid from '!babel-loader!@mdx-js/loader!./articles/DataGrid/SimpleDataGrid.mdx'
import BasicSearchDataGrid from '!babel-loader!@mdx-js/loader!./articles/DataGrid/BasicSearchDataGrid.mdx'
import SubcomponentDataGrid from '!babel-loader!@mdx-js/loader!./articles/DataGrid/SubcomponentDataGrid.mdx'
import Avatar from '!babel-loader!@mdx-js/loader!./articles/Avatar/Avatar.mdx'
import Alert from '!babel-loader!@mdx-js/loader!./articles/Alert/Alert.mdx'
import AlertSplats from './articles/Alert/Alert.splat'
import Badge from '!babel-loader!@mdx-js/loader!./articles/Badge/Badge.mdx'
import BadgeSplats from './articles/Badge/Badge.splat'
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
import MenuSplats from './articles/Menu/Menu.splat'
import TooltipPage from '!babel-loader!@mdx-js/loader!./articles/Tooltip/TooltipPage.mdx'
import Modal from '!babel-loader!@mdx-js/loader!./articles/Modal/Modal.mdx'
import Page from '!babel-loader!@mdx-js/loader!./articles/Page/Page.mdx'
import CaresProvider from '!babel-loader!@mdx-js/loader!./articles/CaresProvider/CaresProvider.mdx'
import Tile from '!babel-loader!@mdx-js/loader!./articles/Tile/Tile.mdx'
import CheckboxBankArticle from '!babel-loader!@mdx-js/loader!./articles/Forms/CheckboxBankArticle.mdx'
import FormPatternsArticle from '!babel-loader!@mdx-js/loader!./articles/Forms/FormPatternsArticle.mdx'
import FormsIndexArticle from '!babel-loader!@mdx-js/loader!./articles/Forms/FormsIndexArticle.mdx'
import InputArticle from '!babel-loader!@mdx-js/loader!./articles/Forms/InputArticle.mdx'
import InputMaskArticle from '!babel-loader!@mdx-js/loader!./articles/Forms/InputMaskArticle.mdx'
// import FormsAbstractArticle from '!babel-loader!@mdx-js/loader!./articles/Forms/FormsAbstractArticle.mdx'
import FormFieldArticle from '!babel-loader!@mdx-js/loader!./articles/Forms/FormFieldArticle.mdx'
// import FormsKitchenSinkArticle from '!babel-loader!@mdx-js/loader!./articles/Forms/FormsKitchenSinkArticle.mdx'
import FormsRadioArticle from '!babel-loader!@mdx-js/loader!./articles/Forms/FormsRadioArticle.mdx'
import FormsSelectArticle from '!babel-loader!@mdx-js/loader!./articles/Forms/FormsSelectArticle.mdx'
import FormsTextAreaArticle from '!babel-loader!@mdx-js/loader!./articles/Forms/FormsTextAreaArticle.mdx'
import FormsDatePickerArticle from '!babel-loader!@mdx-js/loader!./articles/Forms/FormsDatePickerArticle.mdx'

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
      title: 'Alert Splats',
      path: '/alert/splat',
      component: AlertSplats,
      noShow: true,
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
        //   title: 'DataGrid with Advanced Search',
        //   label: 'Advanced Search',
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
    {
      title: 'Menu Splats',
      path: '/menu/splat',
      component: MenuSplats,
      noShow: true,
    },
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
    {
      title: 'Modal',
      path: '/modal',
      component: Modal,
    },
    // {
    //   title: 'Popover',
    //   path: '/popover',
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
    {
      title: 'Forms',
      path: '/forms',
      component: FormsIndexArticle,
      noSort: true,
      children: [
        // {
        //   title: 'Forms: The Kitchen Sink',
        //   label: 'Kitchen Sink',
        //   path: '/kitchen-sink',
        //   component: FormsKitchenSinkArticle,
        // },
        // {
        //   title: 'Abstract',
        //   path: '/abstract',
        //   component: FormsAbstractArticle,
        // },
        {
          title: 'FormField',
          path: '/form-field',
          component: FormFieldArticle,
        },
        {
          title: 'Input',
          path: '/input',
          component: InputArticle,
        },
        {
          title: 'Input Mask',
          path: '/inputMask',
          component: InputMaskArticle,
        },
        {
          title: 'Checkboxes',
          path: '/checkboxes',
          component: CheckboxBankArticle,
        },
        {
          title: 'Radios',
          path: '/radios',
          component: FormsRadioArticle,
        },
        {
          title: 'Select',
          path: '/select',
          component: FormsSelectArticle,
        },
        {
          title: 'TextArea',
          path: '/text-area',
          component: FormsTextAreaArticle,
        },
        {
          title: 'Date Picker',
          path: '/date-picker',
          component: FormsDatePickerArticle,
        },
        {
          title: 'Form Patterns',
          label: 'Patterns',
          path: '/patterns',
          component: FormPatternsArticle,
        },
      ],
    },
  ],
}

export default routes
