import React from 'react';
import {Menu, Grid, Popup, Header} from 'semantic-ui-react'

class TopNavigation extends React.Component {
    constructor(){
        super()
        this.state = { activeItem: 'home' }
    }
    render() {
        const {activeItem} = this.state
        return (
            <Menu borderless fluid fixed='top' size='small' className='desktop-background'>
             <Menu.Item header className='m-text' >BInfluenzas</Menu.Item>

             <Menu.Menu position='right'>
                <Menu.Item >
                <Popup className='desktop-background' position='bottom center' flowing size={'large'} wide content={<Grid padded columns={1} divided >
                  <Grid.Column width={16}>
                    <Grid columns={2}>
                    <Grid.Column >
                    <Header as='h3' inverted>
                      Side One
                    </Header>

                    <Header inverted  as='h4' icon='plug' content='iOs App Development'  subheader='&nbsp; &nbsp; IOS Applications with Swift'/>
                    <Header inverted as='h4' icon='plug' content='Android Applications'  subheader='&nbsp; &nbsp; Android apps with React Native'/>
                    <Header inverted as='h4' icon='plug' content='Video Animations'  subheader='&nbsp; &nbsp; Some Random Shit Here.'/>

                    <Header inverted as='h3'>
                      Website Development
                    </Header>

                    <Header inverted as='h4' icon='plug' content='iOs App Development'  subheader='&nbsp; &nbsp; IOS Applications with Swift'/>
                    <Header inverted as='h4' icon='plug' content='Android Applications'  subheader='&nbsp; &nbsp; Android apps with React Native'/>


                    </Grid.Column>

                    {/* Side Two of Services Dropdown */}
                    <Grid.Column>
                    <Header as='h3' inverted>
                        Side Two
                    </Header>
                    <Header inverted as='h4' icon='plug' content='iOs App Development'  subheader='&nbsp; &nbsp; iOS Apps with Swift'/>
                    <Header inverted as='h4' icon='plug' content='Android Applications'  subheader='&nbsp; &nbsp; Android apps with React Native'/>
                    <Header inverted as='h4' icon='plug' content='Swift Programming'  subheader='some Subheadings'/>
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
                active={activeItem === 'locations'}
                className='m-text'
                />

              <Menu.Item
                name='Contact &nbsp;&nbsp;&nbsp; '
                active={activeItem === 'locations'}
                className='m-text'
                />
             </Menu.Menu>

      </Menu>
         );
    }
}

export default TopNavigation;
