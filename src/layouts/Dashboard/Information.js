import React from 'react'
import { Button, Container, Divider, Grid, Header, Icon, Image, Item, Label, Search, Segment,Card } from 'semantic-ui-react';
import bannerPicture from '../../img/meeting2.jpg';
import user from '../../img/avatar.png';

const HomepageHeading = ({ mobile }) => (
    // <Container text>
    //   <Header
    //     as="h1"
    //     content="Imagine-a-Company"
    //     inverted
    //     style={{
    //       fontSize: mobile ? "2em" : "4em",
    //       fontWeight: "normal",
    //       marginBottom: 0,
    //       marginTop: mobile ? "1.5em" : "3em"
    //     }}
    //     color='orange'
    //   />
    //   <Header
    //     as="h2"
    //     content="Do whatever you want when you want to."
    //     inverted
    //     style={{
    //       fontSize: mobile ? "1.5em" : "1.7em",
    //       fontWeight: "normal",
    //       marginTop: mobile ? "0.5em" : "1.5em"
    //     }}
    //     color='orange'
    //   />
    //   <Button size="huge" color='orange'>
    //     Get Started
    //     <Icon name="right arrow" />
    //   </Button>
    // </Container>
            <Container>
              <Grid>
                <Grid.Row columns={2} only="large screen">
                  
                    <Grid.Column columns={8}>
                        <Container className = "App">
                        <Container></Container>
                            <Header
                                as='h1'
                                content='Search-a-Find-Job'
                                color="grey"
                            />
                            <Header
                                as='h2'
                                content='Do whatever you want when you want to.'
                                color="grey"
                            />
                            <Search size="huge" placeholder='Write the job you are looking for.' />
                        </Container>
                    </Grid.Column>
                    <Grid.Column columns={8}>
                        <Image src={bannerPicture} size="large" color="grey" floated />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
  );

export default function Information() {
  return (
    <div>
        <HomepageHeading/>
        <Segment placeholder>
         <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>Or</Divider>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
            <Icon name='search' />
            find job
          </Header>

          <Search placeholder='Search jobs...' />
        </Grid.Column>

        <Grid.Column>
          <Header icon>
            <Icon name='users' />
            join as employer
          </Header>
          <Button color='orange'>join</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  <Container>
    <Segment>
      <Grid divided>
      <Grid.Row columns={3}>
            <Grid.Column columns={1}>
              <Header size="huge" as="h1">
                Heading
              </Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <Button size="small">
                View details &raquo;
              </Button>
            </Grid.Column>
            <Grid.Column columns={1}>
              <Header size="huge" as="h1">
                Heading
              </Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <Button size="small">
                View details &raquo;
              </Button>
            </Grid.Column>
             <Grid.Column columns={1}>
              <Header size="huge" as="h1">
                Heading
              </Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <Button size="small">
                View details &raquo;
              </Button>
            </Grid.Column>
          </Grid.Row>
          </Grid>
          </Segment>
  </Container>
    </div>
  )
}
