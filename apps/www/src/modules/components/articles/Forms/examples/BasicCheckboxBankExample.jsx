import React, { Fragment } from 'react'
import { Formik } from 'formik'
import { Card, CardBody, FormGroup, Label } from '@cwds/components'
import { CodeBlock } from '@cwds/docs'
import { CheckboxBank } from '@cwds/forms'
import get from 'lodash.get'
import partial from 'lodash.partial'
import { toppings as options } from './toppings-data'

const initialValues = ['3', '2', '5', '9']

const BasicCheckboxBankExample = ({
  className,
  noDebug,
  options,
  initialValues,
  validate,
  label,
  fieldName,
  inline,
}) => {
  return (
    <Formik initialValues={{ [fieldName]: initialValues }} validate={validate}>
      {({ values, errors, touched, setFieldValue, setFieldTouched }) => (
        <Card className={className}>
          <CardBody>
            <FormGroup>
              <Label>{label}</Label>
              <CheckboxBank
                inline={inline}
                options={options}
                value={get(values, fieldName)}
                onChange={(e, newValue) => setFieldValue(fieldName, newValue)}
                onBlur={partial(setFieldTouched, fieldName)}
              />
            </FormGroup>
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
  initialValues,
  label: 'Toppings',
  fieldName: 'toppings',
}

export default BasicCheckboxBankExample
