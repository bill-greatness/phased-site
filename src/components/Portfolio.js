import React from 'react'
import {Grid, Segment, Menu, Dropdown, Icon} from 'semantic-ui-react'

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
          <Dropdown.Header>Categories</Dropdown.Header>
          <Dropdown.Item>
            <Dropdown text='Clothing'>
              <Dropdown.Menu>
                <Dropdown.Header>Mens</Dropdown.Header>
                <Dropdown.Item>Shirts</Dropdown.Item>
                <Dropdown.Item>Pants</Dropdown.Item>
                <Dropdown.Item>Jeans</Dropdown.Item>
                <Dropdown.Item>Shoes</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Womens</Dropdown.Header>
                <Dropdown.Item>Dresses</Dropdown.Item>
                <Dropdown.Item>Shoes</Dropdown.Item>
                <Dropdown.Item>Bags</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Item>
          <Dropdown.Item>Home Goods</Dropdown.Item>
          <Dropdown.Item>Bedroom</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Order</Dropdown.Header>
          <Dropdown.Item>Status</Dropdown.Item>
          <Dropdown.Item>Cancellations</Dropdown.Item>
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
      <Grid padded>
        <Grid.Column width={16}>
          <Segment placeholder>
              Hello Greatness
          </Segment>
        </Grid.Column>
      </Grid>
      </>
  );
}
