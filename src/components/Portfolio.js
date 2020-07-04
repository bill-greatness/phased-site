import React from 'react'
import {Grid, Segment, Menu, Dropdown, Icon, Header, Image, Button} from 'semantic-ui-react'
import laptop from '../assets/laptop.png'

export default function Portfolio(){
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <Menu secondary >
      <Menu.Item>Expertise</Menu.Item>
      <Dropdown text='Tech Stack' pointing className='link item'>
        <Dropdown.Menu>
          <Dropdown.Header>XXX XXX SSs</Dropdown.Header>
          <Dropdown.Header>XYX XXX SSs</Dropdown.Header>
          <Dropdown.Header>XBX XXX SSs</Dropdown.Header>
          <Dropdown.Divider />
            <Dropdown.Header>XXX XXX SSs</Dropdown.Header>
            <Dropdown.Header>XYX XXX SSs</Dropdown.Header>
            <Dropdown.Header>XBX XXX SSs</Dropdown.Header>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item>Region</Menu.Item>

      <Menu.Menu position='right'>
          <Menu.Item icon position='left'>
              Android &nbsp; &nbsp;
              <Icon name='android' ></Icon>
          </Menu.Item>

          <Menu.Item color='orange'>
              ioS &nbsp; &nbsp;
              <Icon name='apple'></Icon>
          </Menu.Item>


          <Menu.Item icon position='left'>
              All &nbsp; &nbsp;
              <Icon name='th list' ></Icon>
          </Menu.Item>

      </Menu.Menu>
    </Menu>
      <Grid padded stackable>
        <Grid.Column width={16}>
          {[1,2,3].map(idx => (
            <Segment key={idx} style={{marginBottom:5}}>
                <Grid columns={2} stackable>
                    <Grid.Column width={5}>
                        <Header as='h1'>
                            Project Name Here ...<br/>
                            <Header.Subheader>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Header.Subheader>
                        </Header>
                          <Button circular icon color='yellow'>
                            <Icon name='angle double right'/> View Project
                          </Button>
                    </Grid.Column>

                    <Grid.Column width={11}>
                        <Image src={laptop} fluid size='large' floated='right'/>
                    </Grid.Column>
                </Grid>
            </Segment>
          ))}


        </Grid.Column>
      </Grid>
      </>
  );
}
