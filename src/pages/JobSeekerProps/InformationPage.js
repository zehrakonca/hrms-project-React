import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Container, Grid, Header, Icon, Segment } from 'semantic-ui-react'
import PersonalInformation from './PersonalInformation';


export default function InformationPage() {

  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item);
  };

  const description = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  ].join(' ')

  const renderContent = () => {
    if (activeMenuItem === '/personalInformation') {
      return <PersonalInformation />;
    }
    else {
      return (
        <Segment>

        </Segment>
      );
    }
  };

  return (
    <Container>
      <Header as='h4' disabled dividing>
        <Icon name='setting' />
        <Header.Content>What do you want to change?</Header.Content>
      </Header>

      <Grid stackable columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Card>
              <Card.Content header='About Personal Info' />
              <Card.Content description={description} />
              <Card.Content extra>
                <Button inverted color='red' as={Link} onClick={() => handleMenuItemClick('/personalInformation')}>
                <Icon name='arrow right'></Icon>
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column>
            <Card>
              <Card.Content header='About Password' />
              <Card.Content description={description} />
              <Card.Content extra>
                <Button inverted color='red'>
                <Icon name='arrow right'></Icon>
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column>
            <Card>
              <Card.Content header='About Telephone' />
              <Card.Content description={description} />
              <Card.Content extra>
                <Button inverted color='red'>
                  <Icon name='arrow right'></Icon>
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Segment>
        {renderContent()}
      </Segment>
    </Container>
  )
}
