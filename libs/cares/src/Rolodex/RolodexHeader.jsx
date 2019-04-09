import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { CardHeader, Util } from '@cwds/reactstrap'
import { Icon } from '@cwds/icons'
import Styles from './Rolodex.module.scss'

class RolodexHeader extends Component {
  static propTypes = {
    'aria-level': PropTypes.number,
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    headerId: PropTypes.string,
    id: PropTypes.string,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    panelId: PropTypes.string,
  }
  static defaultProps = {
    'aria-level': 3,
  }
  el = React.createRef()
  focus() {
    this.el.current.querySelector('[role="button"]').focus()
  }
  render() {
    const {
      className,
      isOpen,
      headerId,
      panelId,
      'aria-level': ariaLevel,
      disabled: ariaDisabled,
      children,
      ...otherProps
    } = this.props
    return (
      <div
        role="heading"
        aria-level={ariaLevel}
        className={cn(Styles.RolodexCap)}
        ref={this.el}
      >
        <CardHeader
          {...otherProps}
          className={cn(
            className,
            Styles.RolodexCardHeader,
            {
              [Styles.Expanded]: isOpen,
            },
            'd-flex align-items-center'
          )}
          id={headerId}
          role="button"
          aria-controls={panelId}
          aria-expanded={isOpen}
          aria-disabled={ariaDisabled}
          tabIndex="0"
        >
          <div className="mr-3 flex-grow-1">{children}</div>
          <Icon
            name="chevron-down"
            rotation={!isOpen ? undefined : Util.ROTATION.FLIP}
          />
        </CardHeader>
      </div>
    )
  }
}

export default RolodexHeader
