import React from 'react'
import {Form, Header, Button, Input,TextArea} from 'semantic-ui-react'

class ContactForm extends React.Component {
  render () {
    return(
      <Form>
          <Header as='h2' content='Tell Us About Your Project' />
          <Form.Field
            label='Name'
            required
            onChange={() => {}}
            control={Input}
          />

          <Form.Field
            label='Email'
            type='email'
            required
            onChange={() => {}}
            control={Input}
          />

          <Form.Field
            label='Phone'
            type='tel'
            required
            onChange={() => {}}
            control={Input}
          />

          <Form.Field
            label='Project Details'
            required
            onChange={() => {}}
            control={TextArea}
          />

          <Button type='submit' size='big' color='yellow' attached='bottom' animated={'vertical'} fluid> Send Request </Button>

      </Form>
    )
  }
}

export default ContactForm;
