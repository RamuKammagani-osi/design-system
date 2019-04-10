import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from '@cwds/reactstrap'
import { renderOne } from '../utils'
// import { CaresContext } from '../utils/CaresContext'
import { CaresContext } from '../CaresContext'

const AppBar = ({ Brand, UserMenu }) => {
  return (
    <Row>
      <Col className="d-flex justify-content-start align-items-center">
        <CaresContext.Consumer>
          {({ Brand: GlobalBrand }) => renderOne(Brand, GlobalBrand)}
        </CaresContext.Consumer>
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        <CaresContext.Consumer>
          {({ UserMenu: GlobalUserMenu }) =>
            renderOne(UserMenu, GlobalUserMenu)
          }
        </CaresContext.Consumer>
      </Col>
    </Row>
  )
}

AppBar.propTypes = {
  Brand: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  UserMenu: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
}
AppBar.defaultProps = {}

export default AppBar
