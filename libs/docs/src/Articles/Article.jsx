import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonGroup, Page } from '@cwds/components'
import SideNav from './ArticleSideNav'
import Breadcrumb from './ArticleBreadcrumb'

class Article extends Component {
  state = {
    layout: 'subroutes',
  }

  handleToggleClick = layout => () => this.setState({ layout })

  render() {
    const isSubRoute = this.state.layout === 'subroutes'
    const { title, main, sidebar, breadcrumbs } = this.props
    return (
      <Page
        title={title}
        layout={this.state.layout}
        Breadcrumb={
          <Breadcrumb items={[{ title: 'Home', path: '/' }, ...breadcrumbs]} />
        }
        main={main}
        sidenav={<SideNav routes={sidebar} />}
        PageActions={
          <ButtonGroup>
            <Button
              active={isSubRoute}
              aria-label="Side Nav"
              aria-pressed={isSubRoute}
              color="primary"
              onClick={this.handleToggleClick('subroutes')}
              size="sm"
            >
              Side Nav
            </Button>
            <Button
              active={!isSubRoute}
              aria-label="Full Width"
              aria-pressed={!isSubRoute}
              color="primary"
              size="sm"
              onClick={this.handleToggleClick('dashboard')}
            >
              Full Width
            </Button>
          </ButtonGroup>
        }
      />
    )
  }
}

Article.propTypes = {
  title: PropTypes.string,
  main: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
  ]),
  sidebar: PropTypes.array,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      active: PropTypes.bool,
    })
  ).isRequired,
}
Article.defaultProps = {
  title: '',
  breadcrumbs: [],
  sidebar: [],
}

export default Article
