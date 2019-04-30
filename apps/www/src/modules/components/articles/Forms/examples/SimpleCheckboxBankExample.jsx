import React, { Fragment } from 'react'
import { Formik, FieldArray } from 'formik'
import { Card, CardBody } from '@cwds/components'
import { CodeBlock } from '@cwds/docs'
import { Legend, Fieldset, CheckboxControl } from '@cwds/forms'

const TOPPINGS = [
  { id: '9', label: 'Anchovies' },
  { id: '3', label: 'Bacon' },
  { id: '8', label: 'Chicken' },
  { id: '6', label: 'Ham' },
  { id: '2', label: 'Mushrooms' },
  { id: '10', label: 'Olives' },
  { id: '7', label: 'Onion' },
  { id: '1', label: 'Pepperoni' },
  { id: '5', label: 'Peppers' },
  { id: '4', label: 'Sausage' },
]

const initialValues = {
  toppings: ['9', '8', '7', '4'],
}

const mkHandleOnChange = (values, id, { push, remove }) => {
  return e => {
    if (e.target.checked) {
      push(id)
    } else {
      remove(values.toppings.indexOf(id))
    }
  }
}

const SimpleCheckboxBankExample = ({ noDebug }) => {
  return (
    <Formik initialValues={initialValues}>
      {({ values }) => (
        <Card>
          <CardBody>
            <Fieldset>
              <Legend>Toppings</Legend>
              <FieldArray name="toppings">
                {arrayOps =>
                  TOPPINGS.map(({ id, label }) => (
                    <CheckboxControl
                      key={id}
                      value={id}
                      checked={values.toppings.includes(id)}
                      onChange={mkHandleOnChange(values, id, arrayOps)}
                      label={label}
                    />
                  ))
                }
              </FieldArray>
            </Fieldset>
            {!noDebug && (
              <Fragment>
                <hr />
                <CodeBlock language="json" className="mb-0">
                  {JSON.stringify(values, null, 2)}
                </CodeBlock>
              </Fragment>
            )}
          </CardBody>
        </Card>
      )}
    </Formik>
  )
}

export default SimpleCheckboxBankExample
