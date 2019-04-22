import * as React from 'react'
import { IListType } from './types'
import cn from 'classnames'
import { Input, FormGroup, Label } from '@cwds/reactstrap'
import { Icon } from '@cwds/icons'
import Styles from './RadioGroup.module.scss'
import Fieldset from './Fieldset'
const uniqueId = require('lodash.uniqueid')

export interface RadioGroupProps<T = string> extends IListType<T> {
  /** The currently selected value */
  value: T
  /** Name for the field. Used to generate unique id */
  name: string
  /** Whether or not to enable the _entire_ field */
  disabled: boolean
  /** Change handler (traditional callback) */
  onChange: React.ChangeEventHandler
  /** Blur handler (traditional callback) */
  onBlur: React.EventHandler<any>
  /** Legend */
  legend: string
}

const RadioGroup = (props: RadioGroupProps<any>) => {
  const grpId = `${props.name}-rdo${uniqueId()}`
  return (
    <Fieldset>
      <legend className="sr-only">{props.legend}</legend>
      {props.options.map(option => {
        const id = `${grpId}-${option.label}`
        return (
          <FormGroup
            check
            key={option.value}
            className={cn(Styles.RadioFormGroup)}
          >
            <Label check>
              <Input
                type="radio"
                name={grpId}
                disabled={option.disabled}
                value={option.value}
                checked={props.value === option.value}
                onChange={props.onChange}
              />
              <Icon
                {...getIconProps({
                  checked: props.value === option.value,
                  disabled: !!option.disabled,
                })}
              />
              <span className={cn({ 'text-muted': option.disabled })}>
                {option.label}
              </span>
            </Label>
          </FormGroup>
        )
      })}
    </Fieldset>
  )
}

export default RadioGroup

//
// Helpers
//
function getIconProps(opts: { checked: boolean; disabled: boolean }) {
  const { checked, disabled } = opts
  return checked
    ? { name: 'circle', className: cn('text-primary', Styles.RadioIcon) }
    : {
        name: ['far', 'circle'],
        className: cn(Styles.RadioIconInactive, Styles.RadioIcon),
      }
}
