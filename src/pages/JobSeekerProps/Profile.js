import React, { useContext, useEffect, useState } from 'react';
import { Container, Dimmer, Grid, Icon, Image, Loader, Menu, Segment } from 'semantic-ui-react'
import avatar from '../../img/avatarForSıgnIn.png'
import Resume from './Resume'
import CoverLetter from './CoverLetter'
import InformationPage from './InformationPage'
import { UserContext } from '../../contexts/UserProvider';
import JobSeekerService from '../../services/jobSeekerService';

export default function Profile() {

  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const { user } = useContext(UserContext);
  const [jobSeeker, setJobSeeker] = useState(null);

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item);
  };

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    const fetchUser = async () => {
      try {
        const response = await jobSeekerService.getById(user?.data?.id);
        setJobSeeker(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    const userId = user?.data?.id;
  
    if (userId) {
      fetchUser();
    }
  
  }, [user?.data?.id]);
  

  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);

  const renderContent = () => {
    if (activeMenuItem === '/informationPage') {
      return <InformationPage />;
    } else if (activeMenuItem === '/resume') {
      return <Resume />;
    } else if (activeMenuItem === 'My Applications') {
      return <div>My Applications Content</div>;
    } else if (activeMenuItem === 'My Favorite Ads') {
      return <div>My Favorite Ads Content</div>;
    } else if (activeMenuItem === '/coverLetter') {
      return <CoverLetter />;
    } else {
      return (
        <h4>
          <Icon name='bolt'></Icon>
          Welcome Back, {user?.data?.firstName || 'FirstName'}. How are you today?<br /><br />
          {formattedDate}
        </h4>
      );
    }
  };

  if (!jobSeeker) {
    return (
      <div>
        <Dimmer active>
          <Loader size='massive'>Loading</Loader>
        </Dimmer>
      </div>
    );
  }

  return (
    <Container style={{ margin: "1em", marginBottom: "11em" }}>
      <Segment raised>
        <Grid stackable>
          <Grid.Row columns={2}>
            <Grid.Column width={4}>
              <Menu vertical>
                <Menu.Item>
                  <Image src={avatar} size="small" circular verticalAlign='middle' />
                </Menu.Item>
                <h4 style={{ margin: '1em' }}>{user?.data?.firstName || 'FirstName'} {user?.data?.lastName || 'LastName'}</h4>
                <Menu.Item onClick={() => handleMenuItemClick('/informationPage')}>
                  General Information
                </Menu.Item>
                <Menu.Item onClick={() => handleMenuItemClick('/resume')}>
                  My Resume
                </Menu.Item>
                <Menu.Item as="a" onClick={() => handleMenuItemClick('My Applications')}>
                  My Applications
                </Menu.Item>
                <Menu.Item onClick={() => handleMenuItemClick('My Favorite Ads')}>
                  My Favorite Ads
                </Menu.Item>
                <Menu.Item onClick={() => handleMenuItemClick('/coverLetter')}>
                  My Cover Letters
                </Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column width={12}>
              <Segment>
                {renderContent()}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  )
}
