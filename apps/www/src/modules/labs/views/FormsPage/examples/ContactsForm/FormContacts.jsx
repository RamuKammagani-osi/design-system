import React, { Fragment } from 'react'
import { Formik } from 'formik'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  PrimalButton as Button,
  Collapse,
  FormGroup,
  Row,
  Col,
  Input,
  Label,
  Select,
  Icon,
  FormFeedback,
} from '@cwds/components'
import {
  CONCTACT_METHOD_OPTIONS,
  CONTACT_METHOD,
  LOCATION_OPTIONS,
  VISIT_TYPE_OPTIONS,
} from './contactsFormEnums'
import initialValues from './contactsFormInitialValues'
import validate from './contactsFormValidate'

export default () => (
  <Formik
    onSubmit={values => alert(JSON.stringify(values, null, 2))}
    initialValues={initialValues}
    validate={validate}
    render={props => {
      return (
        <Card>
          <CardHeader>
            <CardTitle>Create New Contact</CardTitle>
          </CardHeader>
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet, consealksdjf lkj asdlfkj alsdkfj
              lasjkdf lkajsdflkja sldkfj asldfjasdfj alsdf jk
            </p>
            <p>
              <strong>Note</strong>: All fields are required unless labeled:{' '}
              <tt>Optional</tt>
            </p>
            <form onSubmit={props.handleSubmit} id="contact-form">
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label htmlFor="contact__date">Date*</Label>
                    <Input
                      id="contact__date"
                      type="date"
                      value={props.values.date}
                      invalid={!!props.errors.date}
                      name="date"
                      onChange={props.handleChange}
                    />
                    <FormFeedback>{props.errors.date}</FormFeedback>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label htmlFor="contact__methodOfContact">
                      Method of Contact*
                    </Label>
                    {/* @TODO: How to get cssModule className in here? */}
                    <Select
                      id="contact__methodOfContact"
                      name="methodOfContact"
                      options={CONCTACT_METHOD_OPTIONS}
                      onChange={option => {
                        props.setFieldValue(
                          'methodOfContact',
                          option ? option.value : ''
                        )
                      }}
                      onBlur={_ => props.setFieldTouched('methodOfContact')}
                      value={props.values.methodOfContact}
                    />
                    <FormFeedback>{props.errors.methodOfContact}</FormFeedback>
                  </FormGroup>
                </Col>
              </Row>
              <Collapse
                style={{ width: '100%' }}
                isOpen={
                  CONTACT_METHOD.IN_PERSON === props.values.methodOfContact
                }
              >
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label htmlFor="contact__inPersonDetail.location">
                        Location
                      </Label>
                      <Select
                        id="contact__inPersonDetail.location"
                        name="inPersonDetail.location"
                        value={props.values.inPersonDetail.location}
                        options={LOCATION_OPTIONS}
                        onChange={option => {
                          props.setFieldValue(
                            'inPersonDetail.location',
                            option ? option.value : ''
                          )
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label htmlFor="contact__inPersonDetail.visitType">
                        Type
                      </Label>
                      <Select
                        id="contact__inPersonDetail.visitType"
                        name="inPersonDetail.visitType"
                        value={props.values.inPersonDetail.visitType}
                        options={VISIT_TYPE_OPTIONS}
                        onChange={option => {
                          props.setFieldValue(
                            'inPersonDetail.visitType',
                            option ? option.value : ''
                          )
                        }}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Collapse>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label htmlFor="contact__title">Title*</Label>
                    <Input
                      id="contact__title"
                      type="text"
                      name="title"
                      invalid={props.touched.title && !!props.errors.title}
                      maxLength={200}
                      value={props.values.title}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                    />
                    <FormFeedback>{props.errors.title}</FormFeedback>
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Label htmlFor="contact__notes">Notes</Label>
                    <Input
                      id="contact__notes"
                      type="textarea"
                      name="notes"
                      value={props.values.notes}
                      onChange={props.handleChange}
                      rows="10"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </form>
          </CardBody>
          <CardFooter>
            <Button
              onClick={() => alert(JSON.stringify(props.values, null, 2))}
              type="button"
            >
              Cancel
            </Button>{' '}
            <Button
              type="submit"
              form="contact-form"
              color="primary"
              disabled={!(props.dirty && props.isValid) || props.isSubmitting}
            >
              {props.isSubmitting ? (
                <Fragment>
                  <Icon className="mr-2" icon="circleNotch" spin />
                  Saving...
                </Fragment>
              ) : (
                'Save'
              )}
            </Button>
          </CardFooter>
        </Card>
      )
    }}
  />
)
