import React from 'react'
import {List, Image} from 'semantic-ui-react'
import _collect from '../assets/collect-information.png'
import _conf from '../assets/confidentiality.png'
import _suggest from '../assets/design-suggest.png'
import _time from '../assets/estimation.png'
import _contact from '../assets/contact-from-team.png'

class Todo extends React.Component {
  render () {
    return(
      <List verticalAlign={'middle'} relaxed inverted>
        <List.Item>
          <Image  src={_contact} />
          <List.Content  style={{color:'white !important'}}>
            <List.Header >Contact from Our Team </List.Header>
            <List.Description>
              lorem is here for placeholding... Stay tuneds
            </List.Description>
          </List.Content>
        </List.Item>
        <br/>
      <List.Item>
        <Image  src={_collect} />
        <List.Content>
          <List.Header >Collect the necessary information </List.Header>
          <List.Description>
            lorem is here for placeholding... Stay tuneds
          </List.Description>
        </List.Content>
      </List.Item>
      <br/>
      <List.Item>
        <Image src={_suggest} />
        <List.Content>
          <List.Header >Suggest some design Paterns </List.Header>
          <List.Description>
            lorem is here for placeholding... Stay tuneds
          </List.Description>
        </List.Content>
      </List.Item>
      <br/>
      <List.Item>
        <Image  src={_time} />
        <List.Content>
          <List.Header >Time estimation for your project</List.Header>
          <List.Description>
            lorem is here for placeholding... Stay tuneds
          </List.Description>
        </List.Content>
      </List.Item>

      <br/>
      <List.Item>
        <Image  src={_conf} />
        <List.Content>
          <List.Header >Time estimation for your project</List.Header>
          <List.Description>
            lorem is here for placeholding... Stay tuneds
          </List.Description>
        </List.Content>
      </List.Item>

    </List>
    )
  }
}

export default Todo;
