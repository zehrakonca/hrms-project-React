import React from 'react'
import { Button } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
  return (
    <div>
        <Button color="orange" onClick={signIn}>Login</Button>
        <Button color="orange">Sign Up</Button>
    </div>
  )
}
