import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Styles from './PageHeader.module.scss'
import { renderElementOrComponent } from '../utils/renderElementOrComponent'

const PageHeader = props => {
  return (
    <div className={cn(Styles.PageHeader)}>
      <div className={cn('pr-2', Styles.PageTitleContainer)}>
        {renderElementOrComponent(props.PageTitle)}
      </div>
      <div className={cn(Styles.PageActionsContainer)}>
        {renderElementOrComponent(props.PageActions)}
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  PageTitle: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  PageActions: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
}
PageHeader.defaultProps = {}

export default PageHeader
