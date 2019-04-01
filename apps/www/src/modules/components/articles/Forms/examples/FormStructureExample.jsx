import React from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Input,
} from '@cwds/components'
import { Form } from '@cwds/reactstrap'
import { FormField, CheckboxBank } from '@cwds/forms'

// TODO: move `Input` to `@cwds/forms`

// TODO: API Q: Is FormField _that_ generic that our forms can just be the exclusive unit of composition for Forms? That sounds nice... but are we losing the ease of composability?

export default props => (
  <Form>
    <Card>
      <CardHeader>
        <CardTitle>A Typical Form</CardTitle>
      </CardHeader>
      <CardBody>
        <FormField label="My FormField" Component={Input} feedback={null} />
        <FormField
          label="Morning Routine"
          Component={CheckboxBank}
          options={[
            { value: 'eat breakfast', label: 'Eat Breakfast' },
            { value: 'go for a run', label: 'Go for a Run' },
            { value: 'brush teeth', label: 'Brush Teeth' },
            { value: 'take shower', label: 'Take Shower' },
            { value: 'make bed', label: 'Make Bed' },
          ]}
          value={[]}
        />
      </CardBody>
      <CardFooter>
        <Button type="submit" color="primary">
          Submit
        </Button>{' '}
        <Button>Cancel</Button>
      </CardFooter>
    </Card>
  </Form>
)
