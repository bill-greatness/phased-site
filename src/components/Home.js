import React from 'react'
import { Grid, Segment, Image ,
  Header, Divider, List,
  Icon, Statistic, Form, Input, TextArea, Button} from 'semantic-ui-react';
import Title from '../sections/Header'
import Slides from '../sections/Slider'
import ImgHeader from '../sections/ImageHeader'
import Slideshow from 'react-slidez'
import firstSlide from '../assets/slider-1.jpg'
import secondSlide from '../assets/welcome-slider-2.webp'
import thirdSlide from '../assets/welcome-slider-3.webp'
import mobileImage from '../assets/ic_mobile.png'
import dataImage from '../assets/data-sci.png'
import webImage from '../assets/web-devs.png'

import agric from '../assets/leaf.png'
import health from '../assets/ic_healthcare.png'
import travel from '../assets/ic_travel.png'
import logistics from '../assets/ic_logistics.png'
import estate from '../assets/ic_estate.png'
import refund from '../assets/refund.png'

import php from '../assets/ic_Php.png'
import java from '../assets/ic_java.png'
import js from '../assets/ic_Javascript.png'
import kotlin from '../assets/ic_kotlin.png'
import dart from '../assets/ic_Dart.png'
import csharp from '../assets/ic_c_sharp.png'
import objc from '../assets/ic_obj-c.png'
import dnet from '../assets/ic_.net.png'

import angular from '../assets/ic_AngularJS.png'
import react from '../assets/ic_React.png'
import node from '../assets/ic_NodeJS.png'
import flatter from '../assets/ic_flatter.png'
import rcoca from '../assets/ic_reactivecoca.png'
import rxj from '../assets/ic_rxJava.png'
import rorails from '../assets/ic_ruby-on-rails.png'

import elastic from '../assets/ic_Elastic.png'

import mys from '../assets/ic_my_SQL.png'
import fireb from '../assets/ic_Firebase.png'
import mng from '../assets/ic_mongo.png'
import psg from '../assets/ic_Postgree.png'
import realm from '../assets/ic_Realm.png'
import sqli from '../assets/ic_SQLite.png'
import redis from '../assets/ic_Redis.png'



class Homepage extends React.Component{

    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <>

                    <Slideshow
                        autoplay
                        showArrows={false}
                        slideInterval={10000}
                        defaultIndex={1}
                        slides={[firstSlide, secondSlide, thirdSlide]}
                        effect={'right'}
                        height={'100%'}
                        width={'100%'}
                        />

                        <br/>

                <Grid padded columns={3} widths='equal' stackable>
                    <Grid.Column>
                        <Segment raised className='s-segment'>
                            <Image src={mobileImage} size='tiny' floated='right' />
                            <h2>Mobile Development</h2>
                            <p>lorem ipsum, lorem ipsum lorem ipsum,
                            lorem ipsum, lorem ipsum lorem ipsum
                            lorem ipsum, lorem ipsum lorem ipsum
                            </p>
                        </Segment>
                    </Grid.Column>

                    <Grid.Column>
                    <Segment raised className='s-segment'>
                            <Image src={webImage} size='tiny' floated='right' />
                            <h2>Website Development</h2>
                            <p>lorem ipsum, lorem ipsum lorem ipsum,
                            lorem ipsum, lorem ipsum lorem ipsum
                            lorem ipsum, lorem ipsum lorem ipsum
                            </p>
                        </Segment>
                    </Grid.Column>

                    <Grid.Column>
                    <Segment raised className='s-segment'>
                            <Image src={dataImage} size='tiny' floated='right' />
                            <h2>Data Analysis</h2>
                            <p>lorem ipsum, lorem ipsum lorem ipsum,
                            lorem ipsum, lorem ipsum lorem ipsum
                            lorem ipsum, lorem ipsum lorem ipsum
                            </p>
                        </Segment>
                    </Grid.Column>

                </Grid>

                {/* <div className='liner'></div> */}
            <Title title='Our Featured Products' subtitle='Some Randome Text Here' />


{/* Slider Here... */}
         <Grid columns={1} container>
                <Grid.Column width={16}>
                  <Segment style={{width:'100%', height:'200px'}}>
                      <Slides />
                  </Segment>

                </Grid.Column>
        </Grid>

            <Title title='Our Technology Stack' subtitle='Some Random Text Here '/>
            <Divider horizontal> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</Divider>
            <Grid stackable padded>
            <Grid.Row>
                <Grid stackable columns={3} divided>
                    <Grid.Column width={7}>
                        <Grid.Row>
                            <Grid columns={4}>

                            <Grid.Column textAlign='center'>
                               <Image size='tiny' src={js} centered/>
                                  JavaScript
                            </Grid.Column>

                            <Grid.Column textAlign='center'>
                                 <Image size='tiny' src={objc}  centered/>
                                  Objective C
                            </Grid.Column>

                            <Grid.Column textAlign='center'>
                                 <Image size='tiny' src={java}  centered/>
                                  Java
                            </Grid.Column>


                            <Grid.Column textAlign='center'>
                                 <Image size='tiny' src={php}  centered/>
                                  PhP
                            </Grid.Column>







                            </Grid>
                              <br/>
                              <br/>
                              <br/>
                              <br/>

                        </Grid.Row>

                        <Grid.Row>
                        <Grid columns={4}>

                        <Grid.Column textAlign='center'>
                           <Image size='tiny' src={angular}  centered/>
                              Angular
                        </Grid.Column>

                        <Grid.Column textAlign='center'>
                            <Image size='tiny' src={react}  centered/>
                           React
                        </Grid.Column>

                        <Grid.Column textAlign='center'>
                          <Image size='tiny' src={node}  centered/>
                           Node
                        </Grid.Column>

                        <Grid.Column textAlign='center'>
                            <Image size='tiny' src={flatter}  centered/>
                           Flutter
                        </Grid.Column>







                     </Grid>
                     <br/>
                     <br/>
                     <br/>
                     <br/>

                      </Grid.Row>


                        <Grid.Row>
                        <Grid columns={4}>
                            <Grid.Column textAlign='center'>
                              <Image size='tiny' src={psg}  centered/>
                              PostgreSQL
                            </Grid.Column>

                             <Grid.Column textAlign='center'>
                                <Image size='tiny' src={mng}  centered/>
                                Mongo
                             </Grid.Column>

                             <Grid.Column textAlign='center'>
                              <Image size='tiny' src={mys} centered />
                              MySQL
                             </Grid.Column>

                             <Grid.Column textAlign='center'>
                                <Image size='tiny' src={fireb}  centered/>
                                Firebase
                             </Grid.Column>


                     </Grid>
                     <br/>
                     <br/>

                        </Grid.Row>

                    </Grid.Column>

                    <Grid.Column width={2}>
                    <br/>
                    <br/>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                  <Header as='h3' content='Languages' textAlign='center'/>
                                </Grid.Column>


                            </Grid.Row>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>

                            <Grid.Row>
                                <Grid.Column width={16}>
                                  <Header as='h3' content='Frameworks' textAlign='center' />
                                </Grid.Column>

                            </Grid.Row>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>


                            <Grid.Row>
                                <Grid.Column width={16}>
                                  <Header as='h3' content='Databases' textAlign='center'/>
                                </Grid.Column>

                            </Grid.Row>
                            <br/>



                    </Grid.Column>

                    <Grid.Column width={7}>
                        <Grid.Row>
                            <Grid columns={4}>

                            <Grid.Column textAlign='center'>
                                 <Image size='tiny' src={dart}  centered/>
                                  Dart
                            </Grid.Column>

                            <Grid.Column textAlign='center'>
                                 <Image size='tiny' src={kotlin}  centered/>
                                 Kotlin
                            </Grid.Column>

                            <Grid.Column textAlign='center'>
                                 <Image size='tiny' src={csharp}  centered/>
                                  C#
                            </Grid.Column>

                            <Grid.Column textAlign='center'>
                                 <Image size='tiny' src={dnet}  centered/>
                                  .Net
                            </Grid.Column>



                            </Grid>
                              <br/>
                              <br/>
                              <br/>
                              <br/>

                        </Grid.Row>

                        <Grid.Row>
                        <Grid columns={4}>
                        <Grid.Column textAlign='center'>
                             <Image size='tiny' src={realm}  centered/>
                              Realm
                        </Grid.Column>

                        <Grid.Column textAlign='center'>
                             <Image size='tiny' src={rcoca}  centered/>
                              Reactive Coca
                        </Grid.Column>

                        <Grid.Column textAlign='center'>
                             <Image size='tiny' src={rorails}  centered/>
                              Ruby on Rails
                        </Grid.Column>

                        <Grid.Column textAlign='center'>
                             <Image size='tiny' src={rxj}  centered/>
                              rxJava
                        </Grid.Column>



                     </Grid>
                     <br/>
                     <br/>
                     <br/>
                     <br/>

                      </Grid.Row>


                        <Grid.Row>
                        <Grid columns={4}>

                        <Grid.Column textAlign='center'>
                             <Image size='tiny' src={redis}  centered/>
                              Redis
                        </Grid.Column>

                        <Grid.Column textAlign='center'>
                             <Image size='tiny' src={sqli}  centered/>
                              SQLite
                        </Grid.Column>

                        <Grid.Column textAlign='center'>
                             <Image size='tiny' src={elastic}  centered/>
                              Elastic Search
                        </Grid.Column>





                     </Grid>
                     <br/>
                     <br/>

                        </Grid.Row>

                    </Grid.Column>

                </Grid>
            </Grid.Row>

        </Grid>
        <Grid>

          <Grid.Column width={16} style={{backgroundColor:'black'}}>

          <Grid.Column width={8}>
            <Header as='h1' inverted textAlign='center' content="Industries We're Expects In" subheader='Some Random Text Here Some Random Long bunch of text here and i am typing all this for someone to read Some Random Long bunch of text here and i am typing all this for someone to read' />
          </Grid.Column>

              <Grid container padded stackable>
                  <Grid.Column width={16}>
                     <Grid columns={3} stackable>
                        <Grid.Column >
                            <ImgHeader content='Agriculture' subcontent="Some Random Long bunch of text here and i am typing all this for someone to read" image={agric} />
                        </Grid.Column>
                        <Grid.Column>
                            <ImgHeader content='Health' subcontent="Some Random Long bunch of text here and i am typing all this for someone to read" image={health} />
                        </Grid.Column>
                        <Grid.Column>
                            <ImgHeader content='Logictics' subcontent="Some Random Long bunch of text here and i am typing all this for someone to read" image={logistics} />
                        </Grid.Column>
                     </Grid>
                  </Grid.Column>

                  <Grid.Column width={16}>
                  <Grid columns={3} stackable>
                     <Grid.Column >
                         <ImgHeader content='Travel & Hospitality' subcontent="Some Random Long bunch of text here and i am typing all this for someone to read" image={travel} />
                     </Grid.Column>
                     <Grid.Column>
                         <ImgHeader content='Real Estate' subcontent="Some Random Long bunch of text here and i am typing all this for someone to read" image={estate} />
                     </Grid.Column>
                     <Grid.Column>
                         <ImgHeader content='FinTech' subcontent="Some Random Long bunch of text here and i am typing all this for someone to read" image={refund} />
                     </Grid.Column>
                  </Grid>
                  </Grid.Column>

              </Grid>
          </Grid.Column>

        </Grid>

        {/*<Title title='What our Clients Say' subtitle='Some Random Texts over here!' />*/}
        <br/>
        <br/>
        <br/>
        <Grid container padded columns={2} stackable>
            <Grid.Column width={5}>
                <Title title='choose to work with us' />
                  <Statistic.Group size='small'>
                    <Statistic >
                      <Statistic.Value>120+</Statistic.Value>
                      <Statistic.Label>Creative Solutions </Statistic.Label>
                    </Statistic>

                    <Statistic >
                      <Statistic.Value>14</Statistic.Value>
                      <Statistic.Label>Dedicated Employees</Statistic.Label>
                    </Statistic>

                  </Statistic.Group>
            </Grid.Column>

            <Grid.Column width={11}>
              <p style={{fontSize:16, marginLeft:10}}> lorem You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize
              </p>

              <Icon size='large' name='angle double right' color='orange'/> About Us
            </Grid.Column>
        </Grid>

        <Grid container centered>
            <Grid.Column width={12}>
                <Header as='h2' textAlign='center'>
                  Our Clients Say
                  <Header.Subheader>They say a long bunch of nonsense text that i don't wanna type.
                  ..Again.</Header.Subheader>
                </Header>
            </Grid.Column>
            <Grid.Column width={16}>
                <Segment raised placeholder>
                  <Grid columns={1} container>
                         <Grid.Column width={16}>
                           <Segment style={{width:'100%', height:'200px'}}>
                               <Slides />
                           </Segment>

                         </Grid.Column>
                 </Grid>
                </Segment>
            </Grid.Column>
        </Grid>

        <Grid padded centered stackable>
            <Grid.Column width={16}>
                <Segment raised >
                    <Grid padded columns={2} divided>
                        <Grid.Column width={7}>
                        <Header content='What we do next' />
                        <List as='ol' style={{paddingLeft:20}} relaxed='very' size='medium'>
                        <List.Item as='li' value='-' className='list-items'>
                          This is the first thing we do when details are factual
                        </List.Item>
                        <List.Item as='li' value='-' className='list-items'>
                          This is the next thing we do when details are factual
                        </List.Item>
                        <List.Item as='li' value='-' className='list-items'>
                          This is the Last thing we do when details are factual
                        </List.Item >

                        <List.Item as='li' value='-' className='list-items'>
                          Last Thing
                        </List.Item >

                        </List>
                        </Grid.Column>

                        <Grid.Column width={9} centered>
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
                        </Grid.Column>

                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid>


            </>
        )
    }
}

export default Homepage
