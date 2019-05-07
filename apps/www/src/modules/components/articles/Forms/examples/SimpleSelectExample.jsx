import React, { Fragment } from 'react'
import { Formik } from 'formik'
import { Card, CardBody, FormGroup, Label, Select } from '@cwds/components'
import { CodeBlock } from '@cwds/docs'
import { toppings as TOPPINGS } from './toppings-data'

const initialValues = {
  toppings: ['9', '8', '7', '4'],
}

const SimpleSelectExample = ({ noDebug }) => {
  return (
    <Formik initialValues={initialValues}>
      {({ values, touched, errors, setFieldValue, setFieldTouched }) => {
        const mappedValues = values.toppings.map(d =>
          TOPPINGS.find(opt => opt.value === d)
        )
        return (
          <Card>
            <CardBody>
              <FormGroup>
                <Label>Toppings</Label>
                <Select
                  isMulti
                  options={TOPPINGS}
                  value={mappedValues}
                  onChange={(event, newValue) =>
                    setFieldValue('toppings', newValue.map(d => d.value))
                  }
                  onBlur={() => setFieldTouched('toppings')}
                />
                {!noDebug && (
                  <Fragment>
                    <hr />
                    <CodeBlock language="json" className="mb-0">
                      {JSON.stringify({ values, touched, errors }, null, 2)}
                    </CodeBlock>
                  </Fragment>
                )}
              </FormGroup>
            </CardBody>
          </Card>
        )
      }}
    </Formik>
  )
}

export default SimpleSelectExample
