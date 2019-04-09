import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const PageActions = ({ className, ...props }) => (
  <div className={cn(className, 'pr-2')} {...props} />
)

PageActions.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
PageActions.defaultProps = {}

export default PageActions
