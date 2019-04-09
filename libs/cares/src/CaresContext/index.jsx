import React from 'react'
import PropTypes from 'prop-types'
import pick from 'lodash.pick'
import { Brand, UserMenu } from './defaults'

export const defaultContext = {
  Brand,
  UserMenu,
}

export const CaresContext = React.createContext(defaultContext)

export const CaresProvider = ({ children, ...configs }) => (
  <CaresContext.Provider value={configs}>{children}</CaresContext.Provider>
)

CaresProvider.propTypes = { children: PropTypes.node }
CaresProvider.defaultProps = {}

export const withCaresConfig = (Component, subcomponents) => props => (
  <CaresContext.Consumer>
    {context => <Component {...pick(context, subcomponents)} {...props} />}
  </CaresContext.Consumer>
)

export const Consumer = CaresContext.Consumer
