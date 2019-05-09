import React, { Component, Fragment } from 'react'
import { Formik } from 'formik'
import {
  // DatePicker,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CheckboxBank,
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

function MyTelInput({ innerRef, ...props }) {
  return (
    <InputMask
      {...props}
      render={(ref, props) => {
        return <Input innerRef={ref} {...props} />
      }}
    />
  )
}

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

class TinyForm extends Component {
  state = {
    values: {
      name: '',
      age: '',
      likes: [],
      outlook: '',
      pizzaToppings: [],
      satisfaction: '',
      dob: '',
      tel: '',
    },
    errors: {},
    touched: {},
    isValidating: false,
    isSubmiting: false,
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('handling submit...')
  }

  handleReset = () => {}

  handleNameChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        name: e.target.value,
      },
    })
  }

  handleAgeChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        age: e.target.value,
      },
    })
  }

  handleTelephoneChange = e => {
    const value = e.target.value.replace(/[^\d]/gi, '')
    this.setState({
      values: {
        ...this.state.values,
        tel: value,
      },
    })
  }

  handleLikesChange = (event, values) => {
    this.setState({
      values: {
        ...this.state.values,
        likes: values,
      },
      touched: {
        ...this.state.touched,
        likes: true,
      },
      errors: {
        ...this.state.errors,
        likes: validateLikes(values),
      },
    })
  }

  // Fix this in @cwds/forms::RadioGroup
  handleOutlookChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        outlook: e.target.value,
      },
      touched: {
        ...this.state.touched,
        outlook: true,
      },
      errors: {
        ...this.state.errors,
        outlook: validateOutlook(e.target.value),
      },
    })
  }

  handlePizzaToppingsChange = (event, values) => {
    console.log({ event, values })
    this.setState({
      values: {
        ...this.state.values,
        pizzaToppings: selectOptionsToState(values),
      },
    })
  }

  handleSatisfactionChange = (event, value) => {
    console.log({ event, value })
    this.setState({
      values: {
        ...this.state.values,
        satisfaction: selectOptionsToState(value),
      },
    })
  }

  handleDOBChange = (_, value) => {
    debugger
    this.setState({
      values: {
        ...this.state.values,
        dob: value,
      },
    })
  }

  validate = () => {
    // This could be done anywhere/anyhow
    // e.g.; return this.props.validate(this.state.values)
    return [
      ['name', validateName],
      ['age', validateAge],
      ['tel', validateTel],
      ['likes', validateLikes],
      ['outlook', validateOutlook],
      ['pizzaToppings', validatePizzaToppings],
    ].reduce((acc, [field, validator]) => {
      return {
        ...acc,
        [field]: validator(this.state.values[field]),
      }
    }, {})
  }

  handleBlur = e => {
    this.setState({
      touched: {
        ...this.state.touched,
        [e.target.name]: true,
      },
      errors: this.validate(),
    })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} autoComplete="off">
          <FormField
            required
            name="name"
            label="Name"
            Component={Input}
            type="text"
            value={this.state.values.name}
            touched={this.state.touched.name}
            error={this.state.errors.name}
            onChange={this.handleNameChange}
            onBlur={this.handleBlur}
            placeholder="Amos Moses"
          />
          <FormField
            required
            name="age"
            label="Age"
            Component={Input}
            value={this.state.values.age}
            touched={this.state.touched.age}
            error={this.state.errors.age}
            onChange={this.handleAgeChange}
            onBlur={this.handleBlur}
            max="99"
            min="0"
            type="number"
            placeholder="23"
          />
          {/* <FormField
            required
            name="tel"
            label="Telephone"
            Component={MyTelInput}
            value={this.state.values.tel}
            touched={this.state.touched.tel}
            error={this.state.errors.tel}
            onChange={this.handleTelephoneChange}
            onBlur={() => {
              this.setState({
                touched: { ...this.state.touched, tel: true },
                errors: this.validate(),
              })
            }}
            mask={MASKS.PHONE}
            placeholder="(555) 555-5555"
          /> */}
          <FormField
            name="likes"
            label="Likes"
            Component={CheckboxBank}
            options={LIKE_OPTIONS}
            value={this.state.values.likes}
            touched={this.state.touched.likes}
            error={this.state.errors.likes}
            onChange={this.handleLikesChange}
            onBlur={() =>
              this.setState({ touched: { ...this.state.touched, likes: true } })
            }
          />
          <FormField
            name="outlook"
            label="Outlook"
            Component={RadioGroup}
            options={OUTLOOK_OPTIONS}
            aria-labelledby="Hello WOrld"
            value={this.state.values.outlook}
            touched={this.state.touched.outlook}
            error={this.state.errors.outlook}
            onChange={this.handleOutlookChange}
            onBlur={this.handleBlur}
          />
          <FormField
            name="pizzaToppings"
            label="Pizza Toppings"
            Component={Select}
            isMulti
            options={PIZZA_TOPPING_OPTIONS}
            value={stateToSelectOptions(
              this.state.values.pizzaToppings,
              PIZZA_TOPPING_OPTIONS
            )}
            touched={this.state.touched.pizzaToppings}
            error={this.state.errors.pizzaToppings}
            onChange={this.handlePizzaToppingsChange}
            onBlur={() =>
              this.setState({
                touched: { ...this.state.touched, pizzaToppings: true },
              })
            }
          />
          <FormField
            name="satisfaction"
            label="Satisfaction"
            Component={Select}
            options={SERVICE_RATING_OPTIONS}
            value={stateToSelectOptions(
              this.state.values.satisfaction,
              SERVICE_RATING_OPTIONS
            )}
            touched={this.state.touched.satisfaction}
            error={this.state.errors.satisfaction}
            onChange={this.handleSatisfactionChange}
            onBlur={() =>
              this.setState({
                touched: { ...this.state.touched, satisfaction: true },
              })
            }
          />
          {/* <FormField
            name="dob"
            label="Date of Birth"
            Component={DatePicker}
            value={this.state.values.dob}
            touched={this.state.touched.dob}
            error={this.state.errors.dob}
            onChange={this.handleDOBChange}
            onBlur={this.handleBlur}
          /> */}
          <div className="text-right">
            <Button type="button">Reset</Button>{' '}
            <Button primary onClick={this.handleSubmit}>
              Submit
            </Button>
          </div>
        </Form>
        <hr />
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    )
  }
}

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
