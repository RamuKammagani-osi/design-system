import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import pick from 'lodash.pick'
import { Container } from '@cwds/reactstrap'
import { PageHeader, Utils } from '@cwds/cares'
import AppBar from '../AppBar'
import Styles from '../Layout.module.scss'

const Banner = props => {
  return (
    <div role="banner" className={cn(Styles.Banner)}>
      <div className={cn(Styles.AppBarContainer)}>
        <Container>
          <AppBar {...pick(props, ['Brand', 'UserMenu'])} />
        </Container>
      </div>
      <div className={cn(Styles.PageHeaderContainer)}>
        <Container>
          <PageHeader {...pick(props, ['PageActions', 'PageTitle'])} />
        </Container>
      </div>
      {props.Breadcrumb !== false && (
        <div className={cn(Styles.BreadcrumbContainer)}>
          <Container>
            {Utils.renderElementOrComponent(props.Breadcrumb)}
          </Container>
        </div>
      )}
    </div>
  )
}

Banner.propTypes = {
  ...pick(AppBar.propTypes, ['Brand', 'UserMenu']),
  ...pick(PageHeader.propTypes, ['PageActions', 'PageTitle']),
  Breadcrumb: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
}
Banner.defaultProps = {}

export default Banner
