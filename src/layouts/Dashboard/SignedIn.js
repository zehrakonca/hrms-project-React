import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'
import accountAvatar from '../../img/avatarForSıgnIn.png'

export default function SignedIn(props) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src={accountAvatar} size='mini'/>
            <Dropdown pointing="top left" text="zehra">
                <Dropdown.Menu>
                    <Dropdown.Item text="My Account" icon="info"/>
                    <Dropdown.Item text="Logout" icon="power off" onClick={props.signOut}/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
