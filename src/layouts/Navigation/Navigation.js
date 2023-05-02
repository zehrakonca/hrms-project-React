import React,{useState} from 'react'
import { Menu, Icon, Container } from 'semantic-ui-react'
import SignedOut from '../Dashboard/SignedOut'
import SignedIn from '../Dashboard/SignedIn'
import {NavLink,Link} from 'react-router-dom';


export default function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  function handleSignOut(params) {
    setIsAuthenticated(false)
  }

  function handleSignIn(params) {
    setIsAuthenticated(true)
  }

  const navLinkStyles = ({isActive})=> {
    return {
      fontWeight: isActive? 'bold' : 'normal',
      background: isActive? 'darkorange':'transparent',
    }
  }

  return (
    <div>
        <Menu secondary size='large' inverted color='orange' stackable active >
            <Container>
    <Menu.Item>
        <Icon name='handshake outline' size='big' />
        <Link to="/home" >ihopefindjob</Link>
    </Menu.Item>
    <Menu.Item >
    <NavLink to="/home" style={navLinkStyles}>Home</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to="/jobAdvertisementSearchList"style={navLinkStyles}>Job Advertisements</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to="/advertisementPost" style={navLinkStyles}>Advertisement post</NavLink>
    </Menu.Item>
    <Menu.Item>
       
    </Menu.Item>
    <Menu.Item as='a'>
        {/* <Search placeholder='Write the job you are looking for.' /> */}
    </Menu.Item>
    <Menu.Item position='right'>
        {isAuthenticated? <SignedIn signOut={handleSignOut}/> : <SignedOut signIn={handleSignIn}/> }
    </Menu.Item>
    </Container>
</Menu></div>
  )
}
