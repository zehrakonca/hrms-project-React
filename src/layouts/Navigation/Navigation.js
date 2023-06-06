import React, { useState, useCallback, useContext } from 'react';
import { Menu, Container, Popup, Button, Header, Divider, Image, Dropdown } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
import './navigation.css';
import { UserContext } from '../../contexts/UserProvider';

const Navigation = () => {
  const [activeItem, setActiveItem] = useState('home');
  const { user, logout } = useContext(UserContext);

  const handleItemClick = useCallback((e, { name }) => {
    setActiveItem(name);
  }, []);

  const renderLoginButtons = () => {
    if (user) {
      return (
        <>
         <Menu.Item>
            <Image avatar spaced="right" icon='user' size='mini' />
            <Dropdown pointing="top left" text={user.data?.firstName || 'User'}>
              <Dropdown.Menu>
                <Dropdown.Item text="My Account" icon="info" />
                <Dropdown.Item text="Logout" icon="power off" onClick={logout} />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </>
      );
    } else {
      return (
        <>
           <Popup
            trigger={<Button content="Sign Up / Login" color='orange' />}
            on="click"
            position="bottom center"
          >
            <Popup.Content>
              <Header as='h5'>Are you looking for a job?</Header>
              <Button.Group>
                <Button inverted color='orange' as={Link} to='/jobSeekerLogin'>
                  Login
                </Button>
                <Button color='orange' as={Link} to='/jobSeekerSignUp'>
                  Sign Up
                </Button>
              </Button.Group>
              <Divider horizontal>OR</Divider>
              <Header as='h5'>Are you an employer?</Header>
              <NavLink to='/employerLogin' style={{ color: "orangered" }}>
                Login as an Employer
              </NavLink><br />
              <NavLink to='/employer' style={{ color: "orangered" }}>
                Sign Up as an Employer
              </NavLink>
            </Popup.Content>
          </Popup>
        </>
      );
    }
  };

  return (
    <div>
    <Menu secondary inverted color='orange'>
      <Container>
        <Menu.Item>
          <Link to="/home">ihopefindjob</Link>
        </Menu.Item>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={handleItemClick}>
          <NavLink exact to="/home">Home</NavLink>
        </Menu.Item>
        <Menu.Item name='jobAdvertisementSearchList' active={activeItem === 'jobAdvertisementSearchList'} onClick={handleItemClick}>
          <NavLink to="/jobAdvertisementSearchList">Job Advertisements</NavLink>
        </Menu.Item>
        <Menu.Item name='advertisementPost' active={activeItem === 'advertisementPost'} onClick={handleItemClick}>
          <NavLink to="/advertisementPost">Advertisement post</NavLink>
        </Menu.Item>
        <Menu.Item name='sitemap' active={activeItem === 'sitemap'} onClick={handleItemClick}>
          <NavLink to="/sitemap">siteMap</NavLink>
        </Menu.Item>
        <Menu.Item position='right'>
          {renderLoginButtons()}
        </Menu.Item>
      </Container>
    </Menu>
  </div>
  );
}

export default Navigation;
