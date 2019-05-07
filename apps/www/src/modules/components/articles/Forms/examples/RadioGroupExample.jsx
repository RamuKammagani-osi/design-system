import React, { Fragment } from 'react'
import { Formik } from 'formik'
import { Card, CardBody } from '@cwds/components'
import { FormGroup, Label } from '@cwds/reactstrap'
import { RadioGroup } from '@cwds/forms'
import { CodeBlock } from '@cwds/docs'
import get from 'lodash.get'

// @todo: FormGroup should be exported from @cwds/forms
// @todo: Label should be exported from @cwds/forms

const RadioGroupExample = ({
  className,
  noDebug,
  options,
  initialValues = '',
  validate,
  label,
  fieldName = 'example',
  inline,
}) => {
  return (
    <Formik initialValues={{ [fieldName]: initialValues }} validate={validate}>
      {({ values, errors, touched, setFieldValue, setFieldTouched }) => {
        return (
          <Card className={className}>
            <CardBody>
              <FormGroup>
                <Label>{label}</Label>
                <RadioGroup
                  groupName="My RadioGroup"
                  inline={inline}
                  options={options}
                  value={get(values, fieldName)}
                  onChange={e => setFieldValue(fieldName, e.target.value)}
                  onBlur={() => setFieldTouched(fieldName)}
                />
              </FormGroup>
              {!noDebug && (
                <Fragment>
                  <hr />
                  <CodeBlock language="json" className="mb-0">
                    {JSON.stringify({ values }, null, 2)}
                  </CodeBlock>
                </Fragment>
              )}
            </CardBody>
          </Card>
        )
      }}
    </Formik>
  )
}

export default RadioGroupExample
