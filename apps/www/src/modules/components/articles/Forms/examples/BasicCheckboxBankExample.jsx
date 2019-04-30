import React, { Fragment } from 'react'
import { Formik } from 'formik'
import { Card, CardBody, FormGroup, Label } from '@cwds/components'
import { CodeBlock } from '@cwds/docs'
import { CheckboxBank } from '@cwds/forms'
import get from 'lodash.get'
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
                invalid={!!errors.toppings}
                inline={inline}
                options={options}
                value={get(values, fieldName)}
                onChange={(e, newValue) => setFieldValue(fieldName, newValue)}
                onBlur={() => setFieldTouched('toppings')}
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
  validate,
}

export default BasicCheckboxBankExample

//
// Helpers
//

function validate({ toppings }) {
  const errors = {}
  const ANCHOVIES = '1'
  if (toppings.indexOf(ANCHOVIES) > -1) errors.toppings = 'Anchovies are gross!'
  return errors
}
