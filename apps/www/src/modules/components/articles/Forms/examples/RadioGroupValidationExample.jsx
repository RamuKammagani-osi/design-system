import React, { Fragment } from 'react'
import { Formik } from 'formik'
import { Card, CardBody } from '@cwds/components'
import { CodeBlock } from '@cwds/docs'
import { FormField, RadioGroup } from '@cwds/forms'
import get from 'lodash.get'

const options = [
  { value: 'foo', label: 'Foo' },
  { value: 'bar', label: 'Bar' },
  { value: 'bizz', label: 'Bizz (disabled)', disabled: true },
  { value: 'bazz', label: 'Bazz' },
]

const BasicCheckboxBankExample = ({
  className,
  noDebug,
  required,
  options,
  initialValues,
  validate,
  label,
  fieldName: name,
  inline,
}) => {
  return (
    <Formik initialValues={{ [name]: initialValues }} validate={validate}>
      {({ values, errors, touched, setFieldValue, setFieldTouched }) => (
        <Card className={className}>
          <CardBody>
            <FormField
              required={required}
              name={name}
              groupName="My Metastatic Variables"
              label={label}
              Component={RadioGroup}
              options={options}
              value={get(values, name)}
              error={errors[name]}
              touched={touched[name]}
              onChange={e => {
                setFieldValue(name, e.target.value)
                setFieldTouched(name)
              }}
              onBlur={() => setFieldTouched(name)}
            />
            {!noDebug && (
              <Fragment>
                <hr />
                <CodeBlock language="json" className="mb-0">
                  {JSON.stringify({ values, errors, touched }, null, 2)}
                </CodeBlock>
              </Fragment>
            )}
          </CardBody>
        </Card>
      )}
    </Formik>
  )
}

BasicCheckboxBankExample.defaultProps = {
  options,
  initialValues: '',
  label: 'My Label',
  fieldName: 'myField',
  required: true,
  validate: ({ myField }) => {
    const errors = {}
    if (!myField) {
      errors.myField = 'Required Field!'
    } else {
      if (myField === 'bazz') errors.myField = 'Sorry, no bazz is allowed!'
    }
    return errors
  },
}

export default BasicCheckboxBankExample
