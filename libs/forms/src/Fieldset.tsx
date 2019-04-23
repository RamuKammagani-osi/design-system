import React from 'react'
import cn from 'classnames'
import Styles from './Fieldset.module.scss'

interface FieldsetProps {
  className?: string
  children: React.ReactNode
}

export default ({ className, ...props }: FieldsetProps) => {
  return <fieldset className={cn(Styles.Fieldset, className)} {...props} />
}
