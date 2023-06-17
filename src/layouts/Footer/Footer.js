import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Segment, Grid, Header, List, Search } from 'semantic-ui-react';

export default function Footer() {
  return (
    <Segment inverted vertical style={{ padding: '5em 0em' }} color="red">
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as={Link} to="/sitemap">Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <h5>
                Extra space for a call to action inside the footer that could help re-engage users.
              </h5>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header as='h4' inverted>
                Search
              </Header>
              <h5>
                <Search placeholder='Write the job you are looking for.' size='mini' />
              </h5>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}
