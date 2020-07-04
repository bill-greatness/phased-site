import React from 'react';
import {Menu, Grid, Popup, Header, Icon, Image} from 'semantic-ui-react'
import Contact from '../components/Contact'
import logo from '../assets/branfluenza-2.png'

class TopNavigation extends React.Component {
    constructor(){
        super()
        this.state = {
          activeItem: 'home',
          open_modal: false,
         }
    }

    openModal = event =>{
      this.setState({open_modal:!this.state.open_modal})
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
                    <a href='/'>
                    <Header inverted  as='h4' icon='apple' content='Branding and packaging'  subheader='Branding and packaging'/>
                    </a>
                    <br/>
                    <a href='/'>
                    <Header inverted as='h4' icon='plug' content='Digital Marketing'  subheader='Android apps with React Native'/>
                    </a>
                    <br/>
                    <a href='/'>
                    <Header inverted as='h4' icon='plug' content='Ads Concepts and Script Writing'  subheader='Some Random Shit Here.'/>
                    </a>

                    </Grid.Column>

                    {/* Side Two of Services Dropdown */}
                    <Grid.Column>
                    <Header as='h3' inverted>
                      DEVELOPMENT
                    </Header>

                    <a href='/'>
                    <Header inverted as='h4' icon='code' content='Software Development'  subheader='iOS Apps with Swift'/>
                    </a >
                    <br/>

                  <a href='/'>
                    <Header inverted as='h4' icon='android' content='Mobile App Development'  subheader=' Android apps with React Native'/>
                    </a >
                    <br/>

                  <a href='/'>

                    <Header inverted as='h4' icon='globe' content='Website Development'  subheader='some Subheadings'/>
                    </a >
                    <br/>

                  <a href='/'>
                    <Header inverted as='h4' icon='mobile laptop' content='UI/UX'  subheader='some Subheadings'/>
                    </a >
                    </Grid.Column>

                    <Grid.Column>
                      <Header as='h3' inverted>
                        CREATIVE SOLUTIONS
                      </Header>
                      <a href='/'>
                      <Header inverted as='h4' icon='d and d' content='Graphic Design'  subheader='iOS Apps with Swift'/>
                    </a>
                    <br/>
                    <a href='/'>
                      <Header inverted as='h4' icon='camera' content='Photography & Videography'  subheader=' Android apps with React Native'/>
                      </a>
                      <br/>
                      <a href='/'>
                      <Header inverted as='h4' icon='briefcase' content='Content Creation'  subheader='some Subheadings'/>
                      </a>
                      <br/>
                      <a href='/'>
                      <Header inverted as='h4' icon='tv' content='2D & 3D Animations'  subheader='some Subheadings'/>
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
                icon
                className='m-text'
                >
                 <Icon name='bars' inverted size='large' />
               </Menu.Item>
             </Menu.Menu>

      </Menu>
        <Contact open={this.state.open_modal} close={this.openModal}/>
      </>

         );
    }
}

export default TopNavigation;
