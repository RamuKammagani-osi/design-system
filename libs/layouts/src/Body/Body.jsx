import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Container, Row, Col } from '@cwds/reactstrap'
import { JumpToTop, Utils } from '@cwds/cares'
import Styles from '../Layout.module.scss'

const Body = ({ layout, sidenav: SideNav, main: Main, children, message }) => {
  return (
    <div className={cn(Styles.Body)}>
      <Container>
        {layout === 'dashboard' && (
          <div role="main">
            <JumpToTop />
            <div className={Styles.Messages}>{message}</div>
            {Utils.renderElementOrComponent(children || Main)}
          </div>
        )}
        {layout === 'subroutes' && (
          <Row>
            <Col role="navigation" sm={5} md={3}>
              {Utils.renderElementOrComponent(SideNav)}
            </Col>
            <Col role="main" sm={7} md={9}>
              <div className={Styles.Messages}>{message}</div>
              {Utils.renderElementOrComponent(children || Main)}
              <JumpToTop />
            </Col>
          </Row>
        )}
        {layout === 'jumpnav' && (
          <Row>
            <Col role="navigation" sm={5} md={3}>
              {Utils.renderElementOrComponent(SideNav)}
            </Col>
            <Col role="main" sm={7} md={9}>
              <div className={Styles.Messages}>{message}</div>
              {Utils.renderElementOrComponent(children || Main)}
              <JumpToTop />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  )
}

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.func,
  ]),
  layout: PropTypes.oneOf(['dashboard', 'subroutes', 'jumpnav']),
  sidenav: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  main: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  message: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
}

Body.defaultProps = {
  layout: 'dashboard',
  main: null,
  sidenav: null,
}

export default Body
