import React, { Component } from 'react'
import { ICollectionType, IFormControl } from './types'
import cn from 'classnames'
import { Input, FormGroup, Label } from '@cwds/reactstrap'
import { Icon } from '@cwds/icons'
import Styles from './RadioGroup.module.scss'
import Fieldset from './Fieldset'
import Legend from './Legend'

export interface RadioGroupProps
  extends ICollectionType<string>,
    IFormControl {}

class RadioGroup extends Component<RadioGroupProps & { invalid: boolean }> {
  static defaultProps = {
    value: '',
    options: [],
    onChange: () => {},
    onBlur: () => {},
  }

  handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    this.props.onChange(event, event.target.value)
  }

  handleBlur: React.FocusEventHandler<HTMLInputElement> = event => {
    this.props.onBlur(event)
  }

  render() {
    return (
      <Fieldset name={this.props.name}>
        <Legend className="sr-only">{this.props.name}</Legend>
        {this.props.options.map(option => (
          <FormGroup
            check
            key={option.value}
            className={cn(Styles.RadioFormGroup)}
          >
            <Label
              check
              className={cn({
                'text-danger': !!this.props.invalid,
              })}
            >
              <Input
                type="radio"
                name={this.props.name}
                disabled={option.disabled}
                value={option.value}
                checked={this.props.value === option.value}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              <Icon
                {...getIconProps({
                  checked: this.props.value === option.value,
                  disabled: !!option.disabled,
                  invalid: this.props.invalid,
                })}
              />
              <span className={cn({ 'text-muted': option.disabled })}>
                {option.label}
              </span>
            </Label>
          </FormGroup>
        ))}
      </Fieldset>
    )
  }
}

export default RadioGroup

//
// Helpers
//
function getIconProps(opts: {
  checked: boolean
  disabled: boolean
  invalid: boolean
}) {
  const { checked, disabled } = opts
  return checked
    ? { name: 'circle', className: cn('text-primary', Styles.RadioIcon) }
    : {
        name: ['far', 'circle'],
        className: cn(Styles.RadioIconInactive, Styles.RadioIcon),
      }
}
