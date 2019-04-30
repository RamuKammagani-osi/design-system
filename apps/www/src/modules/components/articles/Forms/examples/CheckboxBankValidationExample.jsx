import React from 'react'
import { Formik, Form, Field } from 'formik'
import {
  AlertUncontrolled as Alert,
  Button,
  // Select,
  // Label,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
} from '@cwds/components'
import { Fieldset, Legend, CheckboxControl } from '@cwds/forms'
import {
  // FormGroup,
  FormFeedback,
} from '@cwds/reactstrap'
import { CodeBlock } from '@cwds/docs'

const initialValues = {
  favoriteBeatle: {
    '2': true,
  },
  beatleConfirm: {
    '3': true,
  },
  // color: '',
  // iceCream: 'strawberry',
  // favoriteOgreSaying: '',
}

const OPTIONS_BEATLES = [
  {
    value: '1',
    label: 'John Lennon',
  },
  {
    value: '2',
    label: 'Paul McCartney',
  },
  {
    value: '3',
    label: 'Ringo Starr',
  },
  {
    value: '4',
    label: 'George Harrison',
  },
]

function myValidateFn(value) {
  // let error
  const errors = {}

  if (Object.values(value.favoriteBeatle).filter(Boolean).length === 4) {
    errors.favoriteBeatle = 'You can not choose them all!'
  }
  if (Object.values(value.favoriteBeatle).filter(Boolean).length === 0) {
    errors.favoriteBeatle = 'You have to choose atleast 1!'
  }

  if (Object.values(value.beatleConfirm).filter(Boolean).length === 4) {
    errors.beatleConfirm = 'You can not choose them all!'
  }

  return errors
}

function handleSubmit(values, actions) {
  const DELAY = 1000
  setTimeout(() => {
    console.log(values)
    actions.setSubmitting(false)
    actions.setStatus({ success: true })
    console.log(actions.submitCount)
  }, DELAY)
}

const CheckboxBankValidationExample = () => (
  <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validate={myValidateFn}
  >
    {({
      values,
      errors,
      touched,
      isValidating,
      setFieldTouched,
      setFieldValue,
      isValid,
      isSubmitting,
      submitForm,
      status,
    }) => {
      return (
        <Form>
          <Card>
            <CardHeader>
              <CardTitle>With Validation</CardTitle>
            </CardHeader>
            <CardBody>
              {status && status.success && (
                <Alert color="success">
                  <strong className="text-success">Success!</strong> It workd!
                </Alert>
              )}
              <div>
                <Field
                  name="favoriteBeatle"
                  render={({ field, form, ...restProps }) => {
                    return (
                      <Fieldset>
                        <Legend>Favorite Beatle</Legend>
                        {OPTIONS_BEATLES.map(({ label, value }, i) => {
                          return (
                            <CheckboxControl
                              id={`${field.name}__${value}`}
                              key={`${field.name}__${value}`}
                              name={`${field.name}[${value}]`}
                              value={value}
                              defaultChecked={field.value[value]}
                              onChange={e => {
                                setFieldTouched(`${field.name}`)
                                field.onChange(e)
                              }}
                              onBlur={e => setFieldTouched(`${field.name}`)}
                              label={label}
                              labelClassName={
                                !!errors.favoriteBeatle && 'text-danger'
                              }
                            />
                          )
                        })}
                        {errors.favoriteBeatle && (
                          <FormFeedback valid={false} className="d-block mt-2">
                            {errors.favoriteBeatle}
                          </FormFeedback>
                        )}
                      </Fieldset>
                    )
                  }}
                />
                {/* <Field
                  name="beatleConfirm"
                  render={({ field, form }) => {
                    // field.onChange, field.onBlur, field.name, field.value
                    return (
                      <FormGroup>
                        <Label>Beatles (Again)</Label>
                        <Select
                          {...field}
                          isMulti
                          isClearable
                          options={OPTIONS_BEATLES}
                          defaultValue={OPTIONS_BEATLES.filter(
                            ({ value }) => field.value[value]
                          )}
                          value={OPTIONS_BEATLES.find(
                            d => d.value === field.value
                          )}
                          // OPTIONS_BEATLES.filter(
                          //   ({ value }) => field.value[value]
                          // )
                          onBlur={_ => {}}
                          onChange={(opt, evt) => {
                            const { action, name } = evt
                            // console.log({ opt, evt })
                            switch (action) {
                              case 'select-option':
                                setFieldValue(
                                  name,
                                  opt.reduce(
                                    (acc, d) => ({ ...acc, [d.value]: true }),
                                    {}
                                  )
                                )
                                break
                              case 'remove-value':
                                setFieldValue(
                                  name,
                                  opt.reduce(
                                    (acc, d) => ({ ...acc, [d.value]: true }),
                                    {}
                                  )
                                )
                                break
                              case 'clear':
                                setFieldValue(name, {})
                                break
                              default:
                                break
                            }
                            setFieldTouched(name)
                          }}
                        />
                        {errors.beatleConfirm && (
                          <FormFeedback valid={false} className="d-block mt-2">
                            {errors.beatleConfirm}
                          </FormFeedback>
                        )}
                      </FormGroup>
                    )
                  }}
                /> */}
                {/* <Field
                  name="iceCream"
                  isClearable
                  render={({ field, form, ...props }) => {
                    // console.log({ field, props })
                    const options = [
                      { value: 'chocolate', label: 'Chocolate' },
                      { value: 'strawberry', label: 'Strawberry' },
                      { value: 'vanilla', label: 'Vanilla' },
                    ]
                    return (
                      <FormGroup>
                        <Label>Favorite Ice Cream</Label>
                        <Select
                          name={field.name}
                          {...props}
                          isClearable={true}
                          options={options}
                          defaultValue={options.find(
                            d => d.value === field.value
                          )}
                          value={options.find(d => d.value === field.value)}
                          onChange={(opt, { action, name }) => {
                            switch (action) {
                              case 'select-option':
                                setFieldValue(name, opt.value)
                                break
                              case 'clear':
                                setFieldValue(name, '')
                                break
                              default:
                                break
                            }
                            setFieldTouched(name)
                          }}
                        />
                      </FormGroup>
                    )
                  }}
                /> */}
                {/* <br />
                <FormGroup>
                  <Label>Ogres Say</Label>
                  <Field
                    name="favoriteOgreSaying"
                    render={({ field, form, ...props }) => {
                      const { onChange, onBlur, name, value } = field
                      return (
                        <select
                          onChange={onChange}
                          onBlur={onBlur}
                          name={name}
                          value={value}
                          {...props}
                        >
                          <option value="fee">Fee</option>
                          <option value="fi">Fi</option>
                          <option value="fo">Fo</option>
                          <option value="fum">Fum</option>
                          <option value="all">All of the Above</option>
                        </select>
                      )
                    }}
                  />
                </FormGroup> */}
                <CodeBlock language="json">
                  {JSON.stringify({ values, errors, touched }, null, 2)}
                </CodeBlock>
              </div>
            </CardBody>
            <CardFooter>
              <Button type="reset" disabled={isSubmitting}>
                Reset
              </Button>{' '}
              <Button
                type="submit"
                color="primary"
                disabled={!isValid || isSubmitting}
              >
                Submit
              </Button>
            </CardFooter>
          </Card>
        </Form>
      )
    }}
  </Formik>
)

export default CheckboxBankValidationExample
