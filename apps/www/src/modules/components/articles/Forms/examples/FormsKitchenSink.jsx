import React, { Component } from 'react'
import { Formik } from 'formik'
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardFooter,
  CheckboxBank,
  DatePicker,
  Form,
  FormField,
  Input,
  InputMask,
  RadioGroup,
  Select,
} from '@cwds/components'
import {
  LIKE_OPTIONS,
  OUTLOOK_OPTIONS,
  PIZZA_TOPPING_OPTIONS,
  SERVICE_RATING_OPTIONS,
} from './options'
import { MASKS } from '@cwds/forms'
import { CodeBlock } from '@cwds/docs'

class KitchenSink extends Component {
  initialValues = {
    name: '',
    age: '',
    tel: '',
    likes: [],
    outlook: '',
    pizzaToppings: [],
    satisfaction: '',
    dob: '',
  }
  state = {
    isVisibleFormData: false,
  }
  toggleIsVisibleFormData = () =>
    this.setState({ isVisibleFormData: !this.state.isVisibleFormData })
  render() {
    return (
      <Card>
        <CardHeader>
          <div className="d-flex justify-content-between align-items-center">
            <CardTitle>My Form</CardTitle>
            <div className="d-flex align-items-center">
              <div className="mr-2">Form State</div>
              <ButtonGroup>
                <Button
                  size="sm"
                  active={this.state.isVisibleFormData}
                  onClick={() => this.setState({ isVisibleFormData: true })}
                >
                  Show
                </Button>
                <Button
                  size="sm"
                  active={!this.state.isVisibleFormData}
                  onClick={() => this.setState({ isVisibleFormData: false })}
                >
                  Hide
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </CardHeader>
        <Formik
          initialValues={this.initialValues}
          onSubmit={() => {}}
          render={props => (
            <Form onSubmit={props.handleSubmit} noValidate>
              <CardBody>
                <FormField
                  required
                  id="kitchen-sink-form__name"
                  name="name"
                  label="Name"
                  placeholder="Amos Moses"
                  autoComplete="off"
                  Component={Input}
                  value={props.values.name}
                  touched={props.touched.name}
                  error={props.errors.name}
                  onChange={(event, newValue) =>
                    props.setFieldValue('name', event.target.value)
                  }
                  onBlur={() => props.setFieldTouched('name')}
                />
                <FormField
                  required
                  name="age"
                  label="Age"
                  id="kitchen-sink-form__age"
                  max="99"
                  min="0"
                  type="number"
                  placeholder="23"
                  Component={Input}
                  value={props.values.age}
                  touched={props.touched.age}
                  error={props.errors.age}
                  onChange={(event, newValue) =>
                    props.setFieldValue('age', event.target.value)
                  }
                  onBlur={() => props.setFieldTouched('age')}
                />
                <FormField
                  name="tel"
                  label="Telephone"
                  id="kitchen-sink-form__tel"
                  Component={InputMask}
                  mask={MASKS.PHONE_MASK}
                  unmask={d => d.replace(/[^\d]/gi, '')}
                  showMask
                  value={props.values.tel}
                  touched={props.touched.tel}
                  error={props.errors.tel}
                  onChange={(event, newValue) => {
                    props.setFieldValue('tel', newValue)
                  }}
                  onBlur={() => props.setFieldTouched('tel')}
                />
                <FormField
                  name="likes"
                  id="kitchen-sink-form__likes"
                  label="Likes"
                  Component={CheckboxBank}
                  options={LIKE_OPTIONS}
                  value={props.values.likes}
                  touched={props.touched.likes}
                  error={props.errors.likes}
                  onChange={(event, newValue) =>
                    props.setFieldValue('likes', newValue)
                  }
                  onBlur={() => props.setFieldTouched('likes')}
                />
                <FormField
                  name="outlook"
                  id="kitchen-sink-form__outlook"
                  label="Outlook"
                  Component={RadioGroup}
                  options={OUTLOOK_OPTIONS}
                  value={props.values.outlook}
                  touched={props.touched.outlook}
                  error={props.errors.outlook}
                  onChange={(event, newValue) =>
                    props.setFieldValue('outlook', newValue)
                  }
                  onBlur={() => props.setFieldTouched('outlook')}
                />
                <FormField
                  name="pizzaToppings"
                  id="kitchen-sink-form__pizza-toppings"
                  label="Pizza Toppings"
                  Component={Select}
                  isMulti
                  options={PIZZA_TOPPING_OPTIONS}
                  value={props.values.pizzaToppings}
                  touched={props.touched.pizzaToppings}
                  error={props.errors.pizzaToppings}
                  onChange={(event, newValue) => {
                    props.setFieldValue('pizzaToppings', newValue)
                  }}
                  onBlur={() => props.setFieldTouched('pizzaToppings')}
                />
                <FormField
                  id="kitchen-sink-form__satisfaction"
                  name="satisfaction"
                  label="Satisfaction"
                  Component={Select}
                  options={SERVICE_RATING_OPTIONS}
                  value={props.values.satisfaction}
                  touched={props.touched.satisfaction}
                  error={props.errors.satisfaction}
                  onChange={(event, newValue) => {
                    props.setFieldValue('satisfaction', newValue)
                  }}
                  onBlur={() => props.setFieldTouched('satisfaction')}
                />
                <FormField
                  id="kitchen-sink-form__dob"
                  name="dob"
                  label="Date of Birth"
                  Component={DatePicker}
                  value={props.values.dob}
                  touched={props.touched.dob}
                  error={props.errors.dob}
                  onChange={(event, newValue) => {
                    props.setFieldValue('dob', newValue)
                  }}
                  onBlur={() => props.setFieldTouched('dob')}
                />
                {this.state.isVisibleFormData && (
                  <div>
                    <CodeBlock language="json" className="mb-0">
                      {JSON.stringify(props, null, 2)}
                    </CodeBlock>
                  </div>
                )}
              </CardBody>
              <CardFooter>
                <Button primary type="submit">
                  Submit
                </Button>
              </CardFooter>
            </Form>
          )}
        />
      </Card>
    )
  }
}

export default KitchenSink
