import React,{useState} from 'react'
import { Menu, Icon, Container } from 'semantic-ui-react'
import SignedOut from '../Dashboard/SignedOut'
import SignedIn from '../Dashboard/SignedIn'

export default function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  function handleSignOut(params) {
    setIsAuthenticated(false)
  }

  function handleSignIn(params) {
    setIsAuthenticated(true)
  }

  return (
    <div>
        <Menu secondary size='large' inverted color='orange' stackable >
            <Container>
    <Menu.Item>
        <Icon name='handshake outline' size='big' />
        ihopefindjob
        
    </Menu.Item>
    <Menu.Item active>
   Home
    </Menu.Item>
    <Menu.Item>
        Job Advertisements
    </Menu.Item>
    <Menu.Item>
        Articles
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
