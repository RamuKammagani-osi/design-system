import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import {
  PrimitiveButton as Button,
  Container,
  Row,
  Col,
  PageTitle,
  Banner,
  Footer,
  JumpToTop,
} from '@cwds/components'
import SideNav from './ArticleSideNav'
import Breadcrumb from './ArticleBreadcrumb'
import PageStyles from '@cwds/cares/src/Layouts/Layout.module.scss'

class Article extends Component {
  state = { showNav: true }

  toggleSideNav = () => this.setState({ showNav: !this.state.showNav })

  getColWidths() {
    if (this.state.showNav) {
      return {
        nav: { sm: 5, md: 3 },
        main: { sm: 7, md: 9 },
      }
    } else {
      return { nav: {}, main: {} }
    }
  }

  render() {
    const { main: Main } = this.props
    const { nav: navColProps, main: mainColProps } = this.getColWidths()
    if (!Main) return null
    return (
      <div className={cn('h-100', 'd-flex', 'flex-column', PageStyles.Page)}>
        <Banner
          PageTitle={<PageTitle>{this.props.title}</PageTitle>}
          PageActions={
            <Button size="sm" color="info" onClick={this.toggleSideNav}>
              {this.state.showNav ? 'Hide' : 'Show'} SideNav
            </Button>
          }
          Breadcrumb={<Breadcrumb items={this.props.breadcrumbs} />}
        />
        <div className={cn(PageStyles.Body)}>
          <Container>
            <Row>
              {this.state.showNav && (
                <Col role="navigation" {...navColProps}>
                  <SideNav routes={this.props.sidebar} />
                </Col>
              )}
              <Col role="main" {...mainColProps}>
                <Main />
                <JumpToTop />
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
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
