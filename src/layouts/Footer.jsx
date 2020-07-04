import React from 'react'
import {Grid, Segment, Header, Form,Input, Button, List, Icon} from 'semantic-ui-react'


export default function Footer(){

  return(
        <Grid inverted style={{backgroundColor:'black'}} stackable>
              <Grid padded columns={4} >
                <Grid.Column>
                    <Header as='h3' content='Services' inverted/>
                    <Segment style={{border:'none'}} inverted>
                        <List inverted>
                          <List.Item className='list-items'>
                              Android Development
                          </List.Item>

                          <List.Item className='list-items'>
                              Video Editing
                          </List.Item>

                          <List.Item className='list-items'>
                              Website Development
                          </List.Item>

                          <List.Item className='list-items'>
                              Animation Creations
                          </List.Item>

                          <List.Item className='list-items'>
                              Search Engine Optimization
                          </List.Item>

                        </List>
                    </Segment>

                </Grid.Column>

                <Grid.Column>
                      <Header as='h3' content='Insights' inverted/>
                      <Segment style={{border:'none'}} inverted>
                          <List>
                            <List.Item className='list-items'>
                                Something Here
                            </List.Item>

                            <List.Item className='list-items'>
                                Something Here
                            </List.Item>

                            <List.Item className='list-items'>
                                Something Here
                            </List.Item>

                            <List.Item className='list-items'>
                                Something Here
                            </List.Item>

                            <List.Item className='list-items'>
                                Something Here
                            </List.Item>

                          </List>
                      </Segment>

                </Grid.Column>


                <Grid.Column>
                    <Header as='h3' content='Contact Us' inverted/>
                    <Segment style={{border:'none'}} inverted>
                        <List>
                          <List.Item className='list-items' link>
                              +233(0) 50 934 3841
                          </List.Item>

                          <List.Item className='list-items'>
                              bgreatness@outlook.com
                          </List.Item>

                          <List.Item className='list-items'>
                              @bill_greatness
                          </List.Item>

                          <List.Item className='list-items'>
                              facebook.com/bill.greatness.77
                          </List.Item>

                          <List.Item className='list-items'>
                              Something Else
                          </List.Item>

                        </List>
                    </Segment>
                </Grid.Column>

                <Grid.Column>
                    <Header as='h3' content='Subscribe for More' inverted/>
                    <Form>
                    <Input
                       label={<Button color='yellow' icon><Icon name='angle double right'/></Button>}
                       labelPosition='right'
                       placeholder='bill@greatness.me'
                      />
                      </Form>
                      <br/>
                      <br/>
                      <br/>
                      <Header as='h4' content='SOCIAL NETWORKS' inverted/>
                      <Grid columns={4}>
                          <Grid.Column>
                            <Button icon circular color='linkedin'>
                              <Icon name='linkedin' size='large'  />
                            </Button>
                          </Grid.Column>

                          <Grid.Column>
                            <Button icon circular color='facebook'>
                              <Icon name='facebook f' size='large'  />
                            </Button>
                          </Grid.Column>

                          <Grid.Column>
                            <Button icon circular color='twitter'>
                              <Icon name='twitter' size='large'  />
                            </Button>
                          </Grid.Column>

                          <Grid.Column>
                            <Button icon circular color='instagram'>
                              <Icon name='instagram' size='large'  />
                            </Button>
                          </Grid.Column>


                      </Grid>
                </Grid.Column>

              </Grid>
        </Grid>
  )
}
