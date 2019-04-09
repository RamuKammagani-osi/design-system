import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Styles from './PageTitle.module.scss'

const PageTitle = ({ tag: Tag, title, children }) => {
  return <Tag className={cn(Styles.PageTitle, 'm-0')}>{title || children}</Tag>
}
PageTitle.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
}
PageTitle.defaultProps = {
  tag: 'h1',
  title: '',
}

export default PageTitle
