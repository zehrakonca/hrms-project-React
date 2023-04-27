import React from 'react'
import { Button } from 'semantic-ui-react'

export default function SignedOut(props) {
  return (
    <div>
        <Button color="orange" onClick={props.signIn}>Login</Button>
        <Button color="orange">Sign Up</Button>
    </div>
  )
}
