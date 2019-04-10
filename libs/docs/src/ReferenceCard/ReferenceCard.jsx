import React from 'react'
import cn from 'classnames'
import { Card, CardBody, Icon } from '@cwds/components'
import Styles from './ReferenceCard.module.scss'

export default ({ children, className, name = 'info-circle' }) => {
  return (
    <Card className={cn('bg-breath border-0 rounded-0', className)}>
      <CardBody className="d-flex align-items-start text-info">
        <Icon name={name} size="2x" className="mr-3" />
        <div
          className={cn('flex-grow-1 my-0 font-italic text-info', Styles.Body)}
        >
          {children}
        </div>
      </CardBody>
    </Card>
  )
}
