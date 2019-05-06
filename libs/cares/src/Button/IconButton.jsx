import React from 'react'
import cn from 'classnames'
import { Button as PrimitiveButton } from '@cwds/reactstrap'
import { Icon } from '@cwds/icons'
import Styles from '@cwds/core/scss/bootstrap-cares.module.scss'

const IconButton = ({ icon, primary, className, ...props }) => {
  return (
    <PrimitiveButton
      {...props}
      className={cn(className, Styles.CaresIconButton)}
    >
      {React.isValidElement(icon) ? icon : <Icon name={icon} />}
    </PrimitiveButton>
  )
}
IconButton.defaultProps = {
  icon: 'ellipsis-v',
}

export default IconButton
