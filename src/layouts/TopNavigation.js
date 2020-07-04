import React from 'react';
import {Menu, Grid, Popup, Header, Icon, Image, Segment, TransitionablePortal, List} from 'semantic-ui-react'
import Contact from '../components/Contact'
import logo from '../assets/branfluenza-2.png'

import fintech from '../assets/refund.png'
import agric from '../assets/leaf.png'
import health from '../assets/ic_healthcare.png'
import travel from '../assets/ic_travel.png'
import logistics from '../assets/ic_logistics.png'
import estate from '../assets/ic_estate.png'


class TopNavigation extends React.Component {
    constructor(){
        super()
        this.state = {
          activeItem: 'home',
          open_modal: false,
          open_portal:false
         }
    }

    openModal = event =>{
      this.setState({open_modal:!this.state.open_modal})
    }

    togglePortal = event =>{
      this.setState({open_portal:!this.state.open_portal})
    }




    render() {
        const {activeItem} = this.state
        return (
          <>
            <Menu borderless fluid fixed='top' size='large' className='desktop-background'>
             <Menu.Item header className='m-text' href='/'>
                <Image src={logo} size='mini'/>
                BRANFLUENZAS
             </Menu.Item>

             <Menu.Menu position='right' className='desktop-menu'>
                <Menu.Item >
                <Popup hoverable className='desktop-background' position='bottom center' flowing size={'large'} wide content={<Grid padded columns={1} divided >
                  <Grid.Column width={16}>
                    <Grid columns={3}>
                    <Grid.Column >
                    <Header as='h3' inverted>
                      MARKETING
                    </Header>
                    <a href='/' className='top-links'>
                    <Header inverted  as='h4' icon='apple' className='_head' content='Branding and packaging'  subheader='Branding and packaging'/>
                    </a>
                    <br/>
                    <a href='/' className='top-links'>
                    <Header inverted as='h4' icon='plug' className='_head' content='Digital Marketing'  subheader='Android apps with React Native'/>
                    </a>
                    <br/>
                    <a href='/' className='top-links'>
                    <Header inverted as='h4' icon='plug' className='_head' content='Ads Concepts and Script Writing'  subheader='Some Random Shit Here.'/>
                    </a>

                    </Grid.Column>

                    {/* Side Two of Services Dropdown */}
                    <Grid.Column>
                    <Header as='h3' inverted>
                      DEVELOPMENT
                    </Header>

                    <a href='/' className='top-links'>
                    <Header inverted as='h4' icon='code' className='_head' content='Software Development'  subheader='iOS Apps with Swift'/>
                    </a >
                    <br/>

                  <a href='/' className='top-links'>
                    <Header inverted as='h4' icon='android' className='_head' content='Mobile App Development'  subheader=' Android apps with React Native'/>
                    </a >
                    <br/>

                  <a href='/' className='top-links'>

                    <Header inverted as='h4' icon='globe' className='_head' content='Website Development'  subheader='some Subheadings'/>
                    </a >
                    <br/>

                  <a href='/' className='top-links'>
                    <Header inverted as='h4' icon='mobile laptop' className='_head' content='UI/UX'  subheader='some Subheadings'/>
                    </a >
                    </Grid.Column>

                    <Grid.Column>
                      <Header as='h3' inverted>
                        CREATIVE SOLUTIONS
                      </Header>
                      <a href='/' className='top-links'>
                      <Header inverted as='h4' icon='d and d' className='_head' content='Graphic Design'  subheader='iOS Apps with Swift'/>
                    </a>
                    <br/>
                    <a href='/' className='top-links'>
                      <Header inverted as='h4' icon='camera' className='_head' content='Photography & Videography'  subheader=' Android apps with React Native'/>
                      </a>
                      <br/>
                      <a href='/' className='top-links'>
                      <Header inverted as='h4' icon='briefcase' className='_head' content='Content Creation'  subheader='some Subheadings'/>
                      </a>
                      <br/>
                      <a href='/' className='top-links'>
                      <Header inverted as='h4' icon='tv' className='_head' content='2D & 3D Animations'  subheader='some Subheadings'/>
                      </a>




                    </Grid.Column>
                  </Grid>
                    </Grid.Column>
                </Grid>} trigger={<Menu.Item name='Services' className='m-text'/>} />
                </Menu.Item>


                <Menu.Item
                name='Portfolio'
                href='/portfolio'
                active={activeItem === 'locations'}
                className='m-text'
                />

                <Menu.Item
                name='Blog'
                href='/blog'
                active={activeItem === 'locations'}
                className='m-text'
                />

              <Menu.Item
                name='Contact'
                onClick={this.openModal}
                active={activeItem === 'locations'}
                className='m-text'
                />

                <Menu.Item
                  href='/about-us'
                  name='About Us &nbsp;&nbsp;&nbsp; '
                  active={activeItem === 'locations'}
                  className='m-text'
                  />

             </Menu.Menu>

             <Menu.Menu position='right' className='mobile-menu'>
               <Menu.Item
                 onClick={this.togglePortal}
                icon
                as='a'
                className='m-text'
                >
                {this.state.open_portal ? <Icon name='cancel' inverted size='large'/> :
                 <Icon name='bars' inverted size='large' />}
               </Menu.Item>
             </Menu.Menu>
      </Menu>
          <TransitionablePortal open={this.state.open_portal} transition={{animation:'fly down', duration:1000}}>
              <Segment style={{position:'fixed', width:'100%',borderRadius:0, top:50, height:'100vh', zIndex:1000}} className='desktop-background'>
                <Grid container>
                    <Grid.Row>
                        <Grid columns={3}>
                          <Grid.Column>
                              <Header icon as='a'  inverted className='menu-header'>
                                <Icon name='home' circular size='mini'/>
                                  Home
                              </Header>
                          </Grid.Column>

                          <Grid.Column>
                            <Header icon as='a'  inverted className='menu-header'>
                              <Icon name='info' circular  size='mini'/>
                                About Us
                            </Header>
                          </Grid.Column>


                          <Grid.Column>
                            <Header icon as='a'  inverted className='menu-header'>
                              <Icon name='phone alternate' circular size='mini'/>
                                Contact
                            </Header>
                          </Grid.Column>


                        </Grid>
                    </Grid.Row>

                    <Header as='h3' textAlign='left' inverted>Industries We're Experts In</Header>
                    <br/>
                    <Grid.Row>

                        <Grid container columns={3}>
                            <Grid.Column>
                                <Header as='a' inverted className='menu-header'>
                                  <Image src={fintech} size='mini'/>
                                  FinTech
                                </Header>
                            </Grid.Column>

                            <Grid.Column>
                              <Header as='a' inverted className='menu-header'>
                                <Image src={agric} size='mini'/>
                                Agriculture
                              </Header>
                            </Grid.Column>

                            <Grid.Column>
                              <Header as='a' inverted className='menu-header'>
                                <Image src={health} size='mini'/>
                                Health
                              </Header>
                            </Grid.Column>

                        </Grid>
                    </Grid.Row>


                    <Grid.Row>
                        <Grid container columns={3}>
                            <Grid.Column>
                                <Header as='a' inverted className='menu-header'>
                                  <Image src={travel} size='mini'/>
                                  Travel
                                </Header>
                            </Grid.Column>

                            <Grid.Column>
                              <Header as='a' inverted className='menu-header'>
                                <Image src={logistics} size='mini'/>
                                Logistics
                              </Header>
                            </Grid.Column>

                            <Grid.Column>
                              <Header as='a' inverted className='menu-header'>
                                <Image src={estate} size='mini'/>
                                Estate
                              </Header>
                            </Grid.Column>
                        </Grid>
                    </Grid.Row>

                    <Header as='h3' inverted textAlign='left'>Our Services</Header>
                      <br/>

                    <Grid.Row>

                        <Grid container>
                            <Grid.Column>
                              <List divided relaxed inverted>
                                <List.Item as='a'>
                                  <List.Icon name='apple' size='large' verticalAlign='middle' />
                                  <List.Content>
                                    <List.Header >Marketing</List.Header>
                                    <List.Description as='a'>Transform Your Business to Greatness</List.Description>
                                  </List.Content>
                                </List.Item>
                                <List.Item as='a'>
                                  <List.Icon name='code' size='large' verticalAlign='middle' />
                                  <List.Content>
                                    <List.Header >Development</List.Header>
                                    <List.Description as='a'>Android, Websites and IOS Apps</List.Description>
                                  </List.Content>
                                </List.Item>
                                <List.Item as='a'>
                                  <List.Icon name='camera' size='large' verticalAlign='middle' />
                                  <List.Content>
                                    <List.Header >Creative Solutions</List.Header>
                                    <List.Description as='p'>Videography & Photography</List.Description>
                                  </List.Content>
                                </List.Item>
                                </List>

                            </Grid.Column>
                        </Grid>
                    </Grid.Row>


                </Grid>
              </Segment>
          </TransitionablePortal>
        <Contact open={this.state.open_modal} close={this.openModal}/>
      </>

         );
    }
}

export default TopNavigation;
