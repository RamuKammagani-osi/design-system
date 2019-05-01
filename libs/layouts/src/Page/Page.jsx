import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import pick from 'lodash.pick'
import { PageTitle, Utils } from '@cwds/cares'
import Banner from '../Banner'
import Body from '../Body'
import Footer from '../Footer'
import Styles from '../Layout.module.scss'

/**
 * @todo throw a warning if `main` and `children` are passed
 */
const getBannerProps = props => ({
  ...pick(props, ['Brand', 'UserMenu', 'PageActions', 'Breadcrumb']),
  PageTitle: props.PageTitle || <PageTitle>{props.title}</PageTitle>,
})

const getBodyProps = props => ({
  ...pick(props, ['sidenav', 'layout', 'message']),
  main: props.main || props.children,
})

const Page = props => {
  return (
    <div className={cn('h-100 d-flex flex-column', Styles.Page)}>
      {Utils.renderElementOrComponent(Banner, props, getBannerProps)}
      {Utils.renderElementOrComponent(Body, props, getBodyProps)}
      <Footer />
    </div>
  )
}

Page.propTypes = {
  ...pick(Banner.propTypes, [
    'Brand',
    'UserMenu',
    'PageTitle',
    'PageActions',
    'Breadcrumb',
  ]),
  ...pick(Body.propTypes, ['sidenav', 'layout', 'main', 'children', 'message']),
  /** Shorthand for simple string PageTitles */
  title: PropTypes.string,
  // Banner: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  // Body: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  // Brand: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  // Breadcrumbs: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  // children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  // main: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  // PageTitle: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  // title: PropTypes.string,
}

Page.defaultProps = {}

export default Page
