
import React from 'react'
import {Grid, Segment,Modal} from 'semantic-ui-react'
import ContactForm from '../sections/contact_form'
import Todo from '../sections/todo_list'


class Contact extends React.Component {
  constructor(){
    super()
    this.state = {
      open:false
    }
  }
  close = event => {
    this.props.close()
  }
  render () {

      return(
        <Modal basic size='large' centered={true} onClose={this.close} dimmer={'blurring'} open={this.props.open}  closeIcon>
        <Modal.Header>Get In Touch</Modal.Header>
        <Modal.Content image>
          <Grid relaxed container>
              <Grid.Column padded width={16}>
                  <Grid>

                      <Grid.Column width={7}>
                          <Todo />
                      </Grid.Column>

                      <Grid.Column width={9} centered>
                          <Segment raised>
                              <ContactForm />
                          </Segment>
                      </Grid.Column>
                  </Grid>
              </Grid.Column>
          </Grid>
        </Modal.Content>
    </Modal>)
  }
}

export default Contact;
