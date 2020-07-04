import React from 'react'
import {Card, Grid, Segment,Icon, Image} from 'semantic-ui-react'
import photo from '../assets/tech.jpeg'

class Blog extends React.Component {
  render () {
    return(
      <Segment>
        <br/>
        <br/>
        <br/>
          <Grid container relaxed stackable>
              <Grid.Row>
                  <Grid.Column computer={4} mobile={16} tablet={4}>
                    <Card raised as='a' href='/more-to-come'>
                    <Image src={photo} wrapped fluid size="large"/>
                    <Card.Content textAlign='center'>
                      <Card.Header>Will the World ever get better giving current crisis?</Card.Header>
                    </Card.Content>
                    <Card.Content extra >
                      <a href='/'>
                        <Icon name='calendar' />
                        07 June, 2021
                      </a>

                      <a style={{paddingLeft:20}} href='/something-here'>
                        <Icon name='clock' />
                        8 mins
                      </a>

                    </Card.Content>
                  </Card>


                  </Grid.Column>

                  <Grid.Column computer={4} mobile={8} tablet={4}>

                    <Card raised as='a' href='/more-to-come'>
                    <Image src={photo} wrapped fluid size="large"/>
                    <Card.Content textAlign='center'>
                      <Card.Header>Will the World ever get better giving current crisis?</Card.Header>
                    </Card.Content>
                    <Card.Content extra >
                      <a href='/'>
                        <Icon name='calendar' />
                        07 June, 2021
                      </a>

                      <a style={{paddingLeft:20}} href='/something-here'>
                        <Icon name='clock' />
                        8 mins
                      </a>

                    </Card.Content>
                  </Card>

                  </Grid.Column>


                  <Grid.Column computer={4} mobile={8} tablet={4}>
                    <Card raised as='a' href='/more-to-come'>
                    <Image src={photo} wrapped fluid size="large"/>
                    <Card.Content textAlign='center'>
                      <Card.Header>Will the World ever get better giving current crisis?</Card.Header>
                    </Card.Content>
                    <Card.Content extra >
                      <a href='/'>
                        <Icon name='calendar' />
                        07 June, 2021
                      </a>

                      <a style={{paddingLeft:20}} href='/something-here'>
                        <Icon name='clock' />
                        8 mins
                      </a>

                    </Card.Content>
                  </Card>
                  </Grid.Column>

                  <Grid.Column computer={4} mobile={8} tablet={4}>
                    <Card raised as='a' href='/more-to-come'>
                    <Image src={photo} wrapped fluid size="large"/>
                    <Card.Content textAlign='center'>
                      <Card.Header>Will the World ever get better giving current crisis?</Card.Header>
                    </Card.Content>
                    <Card.Content extra >
                      <a href='/'>
                        <Icon name='calendar' />
                        07 June, 2021
                      </a>

                      <a style={{paddingLeft:20}} href='/something-here'>
                        <Icon name='clock' />
                        8 mins
                      </a>

                    </Card.Content>
                  </Card>
                  </Grid.Column>

              </Grid.Row>
          </Grid>


          {/* Second Faked Blog Posts*/}


          <Grid container relaxed stackable>
              <Grid.Row>
                  <Grid.Column computer={4} mobile={8} tablet={4}>
                    <Card raised as='a' href='/more-to-come'>
                    <Image src={photo} wrapped fluid size="large"/>
                    <Card.Content textAlign='center'>
                      <Card.Header>Will the World ever get better giving current crisis?</Card.Header>
                    </Card.Content>
                    <Card.Content extra >
                      <a href='/'>
                        <Icon name='calendar' />
                        07 June, 2021
                      </a>

                      <a style={{paddingLeft:20}} href='/something-here'>
                        <Icon name='clock' />
                        8 mins
                      </a>

                    </Card.Content>
                  </Card>


                  </Grid.Column>

                  <Grid.Column computer={4} mobile={8} tablet={4}>

                    <Card raised as='a' href='/more-to-come'>
                    <Image src={photo} wrapped fluid size="large"/>
                    <Card.Content textAlign='center'>
                      <Card.Header>Will the World ever get better giving current crisis?</Card.Header>
                    </Card.Content>
                    <Card.Content extra >
                      <a href='/'>
                        <Icon name='calendar' />
                        07 June, 2021
                      </a>

                      <a style={{paddingLeft:20}} href='/something-here'>
                        <Icon name='clock' />
                        8 mins
                      </a>

                    </Card.Content>
                  </Card>

                  </Grid.Column>


                  <Grid.Column computer={4} mobile={8} tablet={4}>
                    <Card raised as='a' href='/more-to-come'>
                    <Image src={photo} wrapped fluid size="large"/>
                    <Card.Content textAlign='center'>
                      <Card.Header>Will the World ever get better giving current crisis?</Card.Header>
                    </Card.Content>
                    <Card.Content extra >
                      <a href='/'>
                        <Icon name='calendar' />
                        07 June, 2021
                      </a>

                      <a style={{paddingLeft:20}} href='/something-here'>
                        <Icon name='clock' />
                        8 mins
                      </a>

                    </Card.Content>
                  </Card>
                  </Grid.Column>

                  <Grid.Column computer={4} mobile={8} tablet={4}>
                    <Card raised as='a' href='/more-to-come'>
                    <Image src={photo} wrapped fluid size="large"/>
                    <Card.Content textAlign='center'>
                      <Card.Header>Will the World ever get better giving current crisis?</Card.Header>
                    </Card.Content>
                    <Card.Content extra >
                      <a href='/'>
                        <Icon name='calendar' />
                        07 June, 2021
                      </a>

                      <a style={{paddingLeft:20}}  href='/something-here'>
                        <Icon name='clock' />
                        8 mins
                      </a>

                    </Card.Content>
                  </Card>
                  </Grid.Column>

              </Grid.Row>
          </Grid>


      </Segment>
    )
  }
}

export default Blog;
