import React, { Component, Fragment } from 'react'
import { Formik } from 'formik'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
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
  LIKE,
  LIKE_OPTIONS,
  OUTLOOK,
  OUTLOOK_OPTIONS,
  PIZZA_TOPPING_OPTIONS,
  SERVICE_RATING_OPTIONS,
} from './options'
import { MASKS } from '@cwds/forms'
import { CodeBlock } from '@cwds/docs'

class KitchenSink extends Component {
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
            <div>
              <Button
                size="sm"
                active={this.state.isVisibleFormData}
                onClick={this.toggleIsVisibleFormData}
              >
                Form State
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <Formik
            initialValues={{
              name: '',
              age: '',
              tel: '',
              likes: [],
              outlook: '',
              pizzaToppings: [],
              satisfaction: '',
              dob: '',
            }}
            onSubmit={() => {}}
            render={props => (
              <Fragment>
                <Form onSubmit={props.handleSubmit}>
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
                    formatValue={selectOptionsToState}
                    parse
                    isMulti
                    options={PIZZA_TOPPING_OPTIONS}
                    value={props.values.pizzaToppings}
                    touched={props.touched.pizzaToppings}
                    error={props.errors.pizzaToppings}
                    onChange={(event, newValue, selectArgs) => {
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
                    formatValue={selectOptionsToState}
                    touched={props.touched.satisfaction}
                    error={props.errors.satisfaction}
                    onChange={(event, newValue, selectArgs) => {
                      props.setFieldValue('satisfaction', newValue)
                    }}
                    onBlur={() => props.setFieldTouched('satisfaction')}
                  />
                  <FormField
                    name="dob"
                    label="Date of Birth"
                    Component={DatePicker}
                    value={props.values.dob}
                    touched={props.touched.dob}
                    error={props.errors.dob}
                    onChange={(event, newValue) =>
                      props.setFieldValue('dob', newValue)
                    }
                    onBlur={() => props.setFieldTouched('dob')}
                  />
                </Form>
                {this.state.isVisibleFormData && (
                  <div>
                    <CodeBlock language="json" className="mb-0">
                      {JSON.stringify(props, null, 2)}
                    </CodeBlock>
                  </div>
                )}
              </Fragment>
            )}
          />
        </CardBody>
      </Card>
    )
  }
}

//           <FormField
//             name="pizzaToppings"
//             label="Pizza Toppings"
//             Component={Select}
//             isMulti
//             options={PIZZA_TOPPING_OPTIONS}
//             value={stateToSelectOptions(
//               this.state.values.pizzaToppings,
//               PIZZA_TOPPING_OPTIONS
//             )}
//             touched={this.state.touched.pizzaToppings}
//             error={this.state.errors.pizzaToppings}
//             onChange={this.handlePizzaToppingsChange}
//             onBlur={() =>
//               this.setState({
//                 touched: { ...this.state.touched, pizzaToppings: true },
//               })
//             }
//           />
//           <FormField
//             name="satisfaction"
//             label="Satisfaction"
//             Component={Select}
//             options={SERVICE_RATING_OPTIONS}
//             value={stateToSelectOptions(
//               this.state.values.satisfaction,
//               SERVICE_RATING_OPTIONS
//             )}
//             touched={this.state.touched.satisfaction}
//             error={this.state.errors.satisfaction}
//             onChange={this.handleSatisfactionChange}
//             onBlur={() =>
//               this.setState({
//                 touched: { ...this.state.touched, satisfaction: true },
//               })
//             }
//           />
//           {/* <FormField
//             name="dob"
//             label="Date of Birth"
//             Component={DatePicker}
//             value={this.state.values.dob}
//             touched={this.state.touched.dob}
//             error={this.state.errors.dob}
//             onChange={this.handleDOBChange}
//             onBlur={this.handleBlur}
//           /> */}
//     )
//   }
// }

// export default TinyForm
export default KitchenSink

//
// Helpers
//

function stateToSelectOptions(valueOrValues, options) {
  return Array.isArray(valueOrValues)
    ? valueOrValues.map(value => options.find(option => option.value === value))
    : options.find(option => option.value === valueOrValues)
}

function selectOptionsToState(selectedOptionOrOptions) {
  return Array.isArray(selectedOptionOrOptions)
    ? selectedOptionOrOptions.map(({ value }) => value)
    : selectedOptionOrOptions.value
}

function validateName(name) {
  if (!name) return 'This is a required field!'
  if (name.length <= 2) return 'More than 2 characters please!'
  if (name.toLowerCase() === 'admin') return 'Admins are not allowed!'
}

function validateAge(age) {
  if (!age) return 'This is a required field!'
  if (age < 0) return 'Invalid value'
  if (age > 99) return 'Invalid value'
}

function validateTel(tel) {
  if (!tel) return 'This is a required field!'
  if (tel.startsWith('555')) return 'No 555 fake numbers please!'
}

function validateLikes(likes) {
  if (likes.indexOf(LIKE.HIGH_FIVE) > -1) return 'High fives are the worst!'
}

function validateOutlook(outlook) {
  if (outlook && outlook !== OUTLOOK.GLASS_HALF_FULL)
    return 'Only positive outlooks are allowed!'
}

function validatePizzaToppings(pizzaToppings) {}
