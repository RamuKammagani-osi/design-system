import React, { Fragment } from 'react'
import { Route, withRouter, Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, Page } from '@cwds/components'
/* eslint-disable import/no-webpack-loader-syntax */
import DefaultPage from '!babel-loader!@mdx-js/loader!./views/DefaultView.mdx'
import CardsPage from '!babel-loader!@mdx-js/loader!./views/CardsPage/Cards.mdx'
// import DataGridsPage from '!babel-loader!@mdx-js/loader!./views/DataGridsPage/DataGridsPage.mdx';
import FormsPage from '!babel-loader!@mdx-js/loader!./views/FormsPage/FormsPage.mdx'
import DeviceDetectionPage from './views/DeviceDetection'

const TITLE = 'Labs'
const HOME_ROUTE = { title: TITLE, path: '/labs' }

const routes = [
  { title: 'Cards', path: '/cards', component: CardsPage },
  { title: 'Forms', path: '/forms', component: FormsPage },
  {
    title: 'Device Detection',
    path: '/device-detection',
    component: DeviceDetectionPage,
  },
  // { title: 'DataGrids', path: '/datagrids', component: DataGridsPage },
].map(d => ({ ...d, path: [HOME_ROUTE.path, d.path].join('') }))

const makeBreadcrumb = location => {
  return [
    { path: '/', title: 'Home' },
    HOME_ROUTE,
    routes.find(({ path }) => path === location.pathname),
  ].filter(Boolean)
}

export default withRouter(({ match, location }) => (
  <Page
    title="Labs"
    breadcrumb={makeBreadcrumb(location)}
    layout="subroutes"
    main={() => (
      <Fragment>
        {routes.map(({ title, path, component: Component }) => (
          <Route key={path} path={path} component={Component} />
        ))}
        <Route exact path={match.url} render={DefaultPage} />
      </Fragment>
    )}
    sidenav={() => (
      <ListGroup>
        {routes.map(({ path, title }) => {
          return (
            <ListGroupItem
              action
              key={path}
              active={location.pathname === path}
              tag={Link}
              to={path}
            >
              {title}
            </ListGroupItem>
          )
        })}
      </ListGroup>
    )}
  />
))
