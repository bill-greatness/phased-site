import React from 'react'
import {Grid, Header, Statistic, Divider, Image, Card, Icon} from 'semantic-ui-react'
import ghana from '../assets/ghana-2.png'
import userImg from '../assets/placeholder-image.png'
import mission from '../assets/img_mission.png'
import involve from '../assets/img_involement.png'
import values from '../assets/img_values.png'

class About extends React.Component {
  render () {
     return(
       <>
                <Grid.Column width={16} className='welcome-us'>
                      <Header as='h1' textAlign='center' inverted size='huge' className='welcome-header'>
                            Welcome To Branfluenzas
                            <Header.Subheader>
                              lorem ipsum, lorem ipsum lorem ipsum,
                              lorem ipsum, lorem ipsum lorem ipsum
                              lorem ipsum, lorem ipsum lorem ipsum
                            </Header.Subheader>
                      </Header>
                </Grid.Column>

      <Grid container>
            <Grid.Row>
                  <Grid.Column width={7}>
                    <br/>
                        <Header as='h1' textAlign='left' size='huge'>
                            About Us

                            <Header.Subheader style={{fontSize:16}}>
                              lorem ipsum, lorem ipsum lorem ipsum,
                              lorem ipsum, lorem ipsum lorem ipsum
                              lorem ipsum, lorem ipsum lorem ipsum
                            </Header.Subheader>
                              <br/>
                            <Header.Subheader>
                              lorem ipsum, lorem ipsum lorem ipsum,
                              lorem ipsum, lorem ipsum lorem ipsum
                              lorem ipsum, lorem ipsum lorem ipsum
                            </Header.Subheader>

                        </Header>

                        <Divider horizontal>o</Divider>
                          <Statistic.Group size='tiny'>
                          <Statistic>
                            <Statistic.Value>4</Statistic.Value>
                            <Statistic.Label>Years on Market</Statistic.Label>
                          </Statistic>
                          <Statistic>
                            <Statistic.Value>30+</Statistic.Value>
                            <Statistic.Label>Employees</Statistic.Label>
                          </Statistic>
                          <Statistic>
                            <Statistic.Value>30+</Statistic.Value>
                            <Statistic.Label>Successful Projects</Statistic.Label>
                          </Statistic>
                        </Statistic.Group>
                  </Grid.Column>

                  <Grid.Column width={9}>
                    <br/>
                        <Image src={ghana} size='medium' fluid floated='right' />
                  </Grid.Column>

            </Grid.Row>


            <Grid.Row>
                    {/* Welcome */}
                    <Grid.Column width={16}>
                          <Header as='h1' size='huge' textAlign='center'>
                              Our Management Team
                              <Header.Subheader>
                                  Something Here to read for yourself.
                              </Header.Subheader>
                          </Header>

                          <Grid columns={4}>

                              <Grid.Column>
                                <Card>
                                   <Image src={userImg} wrapped ui={false} />
                                   <Card.Content>
                                     <Card.Header>Samuel Smith </Card.Header>
                                     <Card.Meta>
                                       <span className='date'>CEO/Something</span>
                                     </Card.Meta>
                                   </Card.Content>
                                  </Card>

                              </Grid.Column>

                              <Grid.Column>
                                <Card>
                                   <Image src={userImg} wrapped ui={false} />
                                   <Card.Content>
                                     <Card.Header>James Powell </Card.Header>
                                     <Card.Meta>
                                       <span className='date'>CEO/Something</span>
                                     </Card.Meta>
                                   </Card.Content>
                                  </Card>
                              </Grid.Column>

                              <Grid.Column>
                                <Card>
                                   <Image src={userImg} wrapped ui={false} />
                                   <Card.Content>
                                     <Card.Header>Emma Koomson</Card.Header>
                                     <Card.Meta>
                                       <span className='date'>CEO/Something</span>
                                     </Card.Meta>
                                   </Card.Content>
                                  </Card>
                              </Grid.Column>


                              <Grid.Column>
                                <Card>
                                   <Image src={userImg} wrapped ui={false} />
                                   <Card.Content>
                                     <Card.Header>Kwame Atta</Card.Header>
                                     <Card.Meta>
                                       <span className='date'>CEO/Something</span>
                                     </Card.Meta>
                                   </Card.Content>
                                  </Card>
                              </Grid.Column>

                          </Grid>
                      </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                    {/* Welcome */}
                    <Grid.Column width={16}>
                      <Grid>
                          <Grid.Row>
                              <Grid.Column width={7}>
                                <br/>
                                <br/>
                                  <Header as='h1' textAlign='left'>
                                      Mission
                                      <br/>
                                      <br/>
                                      <Header.Subheader>Some Long Text Description Here for you to read.  <br/>
                                        Some Long Text Description Her<br/>
                                     Some Long Text Description Her</Header.Subheader>
                                  </Header>
                              </Grid.Column>

                              <Grid.Column width={9}>
                                  <Image src={mission} floated={'right'} />
                              </Grid.Column>
                          </Grid.Row>

                          <Grid.Row>
                              <Grid.Column width={7}>
                                <br/>
                                <br/>
                                  <Header as='h1' textAlign='left'>
                                      Values
                                      <br/>
                                      <br/>
                                      <Header.Subheader>Some Long Text Description Here for you to read.  <br/>
                                        Some Long Text Description Her<br/>
                                     Some Long Text Description Her</Header.Subheader>
                                  </Header>
                              </Grid.Column>

                              <Grid.Column width={9}>
                                  <Image src={values} floated={'right'} />
                              </Grid.Column>
                          </Grid.Row>

                          <Grid.Row>
                              <Grid.Column width={7}>
                                <br/>
                                <br/>
                                  <Header as='h1' textAlign='left'>
                                      Involvement
                                      <br/>
                                      <br/>
                                      <Header.Subheader>Some Long Text Description Here for you to read.  <br/>
                                        Some Long Text Description Her<br/>
                                     Some Long Text Description Her</Header.Subheader>
                                  </Header>
                              </Grid.Column>

                              <Grid.Column width={9}>
                                  <Image src={involve} floated={'right'} />
                              </Grid.Column>
                          </Grid.Row>
                      </Grid>
                    </Grid.Column>

            </Grid.Row>
        </Grid>
          <br/>
          <br/>
        <Divider horizontal children={
          <div> Follow Us On: &nbsp;&nbsp;&nbsp;
                 <Icon circular color='blue' name='facebook f' /> &nbsp;&nbsp;&nbsp;
                 <Icon circular color='orange' name='instagram' />&nbsp;&nbsp;&nbsp;
                 <Icon circular inverted color='teal' name='linkedin' />
                </div>


          } ></Divider>
        <br/>
        <br/>
        </>
     )
  }
}

export default About;
