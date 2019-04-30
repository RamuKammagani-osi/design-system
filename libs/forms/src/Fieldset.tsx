import React from 'react'
import { FormGroup } from '@cwds/reactstrap'

interface FieldsetProps {
  className?: string
  name?: string
  disabled?: boolean
}

const Fieldset: React.FunctionComponent<FieldsetProps> = props => (
  <FormGroup tag="fieldset" {...props} />
)

export default Fieldset
