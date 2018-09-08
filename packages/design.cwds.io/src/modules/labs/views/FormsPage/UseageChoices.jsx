import React, { Fragment } from 'react';
import { Formik } from 'formik';
import { Row, Col } from '@cwds/components/lib/Grid';
import Card from '@cwds/components/lib/Cards';
import FormFeedback from '@cwds/components/lib/FormFeedback';
import FormGroup from '@cwds/components/lib/FormGroup';
import Label from '@cwds/components/lib/Label';
import Select from '@cwds/components/lib/Select';

import CheckboxBank from '@cwds/components/lib/CheckboxBank';
import RadioGroup from '@cwds/components/lib/RadioGroup';

export default () => (
  <Fragment>
    <h4>Appropriate Use Cases of FormElements</h4>
    <p>alsdfjasdf</p>
    <h5>RadioGroup vs CheckboxBank</h5>
    <p>Traditionally, ...</p>
    <h5>
      <tt>RadioGroup</tt> vs <tt>Select</tt>
    </h5>
    <Formik
      initialValues={{
        myField: '',
      }}
      onSubmit={_ => {}}
      render={props => {
        const options = [
          { label: 'Foo', value: 'foo' },
          { label: 'Bar', value: 'bar' },
          { label: 'Quo', value: 'quo' },
          { label: 'Qux', value: 'qux' },
        ];
        return (
          <Card>
            <Row>
              <Col md={6}>
                <RadioGroup
                  required
                  name="myField"
                  legend="My Radio Group"
                  options={options}
                  value={props.values.myField}
                  // TODO: Should look more like this
                  // onChange={value => props.setFieldValue('myField', value)}
                  onChange={e => {
                    props.setFieldValue(e.target.name, e.target.value, false);
                    props.handleChange(e);
                  }}
                />
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label required>My Select</Label>
                  <Select
                    name="myField"
                    options={options}
                    onChange={option => {
                      props.setFieldValue(
                        'myField',
                        option ? option.value : ''
                      );
                    }}
                    onBlur={_ => props.setFieldTouched('methodOfContact')}
                    value={props.values.myField}
                  />
                  <FormFeedback>{props.errors.myField}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
          </Card>
        );
      }}
    />
    <hr />
    <h5>
      <tt>CheckboxBank</tt> vs <tt>Select[multi]</tt>
    </h5>
    <Formik
      initialValues={{
        myField: [],
      }}
      onSubmit={_ => {}}
      render={props => {
        const options = [
          { label: 'Foo', value: 'foo' },
          { label: 'Bar', value: 'bar' },
          { label: 'Quo', value: 'quo' },
          { label: 'Qux', value: 'qux' },
        ];
        return (
          <Card>
            <Row>
              <Col md={6}>
                <CheckboxBank
                  required
                  name="myField"
                  legend="My CheckboxBank"
                  options={options}
                  value={props.values.myField}
                  onChange={(field, value) => {
                    props.setFieldValue(field, value);
                  }}
                />
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label required>My Select</Label>
                  <Select
                    name="myField"
                    options={options}
                    multi
                    value={props.values.myField}
                    onChange={values => {
                      props.setFieldValue(
                        'myField',
                        values.map(({ value }) => value)
                      );
                    }}
                  />
                  <FormFeedback>{props.errors.myField}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
          </Card>
        );
      }}
    />
    <hr />
    <h5>
      <tt>Checkbox</tt> (binary) vs <tt>RadioGroup</tt>
    </h5>
    <div>alksdfj</div>
  </Fragment>
);
