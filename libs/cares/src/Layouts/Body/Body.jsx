import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Container, Row, Col } from '@cwds/reactstrap'
import { renderElementOrComponent } from '../../utils'
import Styles from '../Layout.module.scss'

const Body = ({ layout, sidenav: SideNav, main: Main, children, message }) => {
  return (
    <div className={cn(Styles.Body)}>
      <Container>
        {layout === 'dashboard' && (
          <div role="main">
            <div className={Styles.Messages}>{message}</div>
            {renderElementOrComponent(children || Main)}
          </div>
        )}
        {layout === 'subroutes' && (
          <Row>
            <Col role="navigation" sm={5} md={3}>
              {renderElementOrComponent(SideNav)}
            </Col>
            <Col role="main" sm={7} md={9}>
              <div className={Styles.Messages}>{message}</div>
              {renderElementOrComponent(children || Main)}
            </Col>
          </Row>
        )}
        {layout === 'jumpnav' && (
          <Row>
            <Col role="navigation" sm={5} md={3}>
              {renderElementOrComponent(SideNav)}
            </Col>
            <Col role="main" sm={7} md={9}>
              <div className={Styles.Messages}>{message}</div>
              {renderElementOrComponent(children || Main)}
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
