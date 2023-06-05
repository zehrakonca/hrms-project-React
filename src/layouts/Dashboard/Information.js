import React from 'react';
import { Button, Container, Divider, Grid, Header, Icon, Image, Search, Segment } from 'semantic-ui-react';
import bannerPicture from '../../img/meeting2.jpg';
import 'semantic-ui-css/semantic.min.css';
import UserCount from "../Dashboard/UserCount";
import { Link } from 'react-router-dom';

const HomepageHeading = ({ mobile }) => (
  <Container>
    <Grid>
      <Grid.Row columns={2} only="large screen">
        <Grid.Column>
          <Container className="App">
            <Container></Container>
            <Header as='h1' content='Search-a-Find-Job' color="grey" />
            <Header as='h2' content='Do whatever you want when you want to.' color="grey" />
            <Search size="huge" placeholder='Write the job you are looking for.' />
          </Container>
        </Grid.Column>
        <Grid.Column>
          <Image src={bannerPicture} size="large" color="grey" floated='right' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default function Information() {
  return (
    <Container style={{margin: '1em'}}>
      <HomepageHeading />
      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical>Or</Divider>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Header icon>
                <Icon name='search' />
                Find job
              </Header>
              <Search placeholder='Search jobs...' />
            </Grid.Column>
            <Grid.Column>
              <Header icon>
                <Icon name='users' />
                Join as employer
              </Header>
              <Button color='orange' as={Link} to='/employer'>Join</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Container>
        <Segment>
          <Grid divided>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Header size="huge" as="h1">
                  Heading
                </Header>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                  tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                  fermentum massa justo sit amet risus. Etiam porta sem malesuada
                  magna mollis euismod. Donec sed odio dui.
                </p>
                <Button size="small">View details &raquo;</Button>
              </Grid.Column>
              <Grid.Column>
                <Header size="huge" as="h1">
                  Heading
                </Header>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                  tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                  fermentum massa justo sit amet risus. Etiam porta sem malesuada
                  magna mollis euismod. Donec sed odio dui.
                </p>
                <Button size="small">View details &raquo;</Button>
              </Grid.Column>
              <Grid.Column>
                <Header size="huge" as="h1">
                  Heading
                </Header>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                  tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                  fermentum massa justo sit amet risus. Etiam porta sem malesuada
                  magna mollis euismod. Donec sed odio dui.
                </p>
                <Button size="small">View details &raquo;</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <UserCount />
      </Container>
      </Container>
  )
}
