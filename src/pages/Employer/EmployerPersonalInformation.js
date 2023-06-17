import React from 'react'
import { Button, Container, Form, Segment } from 'semantic-ui-react'

export default function EmployerPersonalInformation() {
    return (
        <Container style={{ margin: '1em' }}>
            <Segment raised>
                <Form widths='equal'>
                    <Form.Group>
                        <Form.Input
                            label='First Name'
                            placeholder='please enter your first name'
                            icon='user' />
                        <Form.Input
                            label='Last Name'
                            placeholder='please enter your last name'
                            icon='user' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            label='Telephone'
                            placeholder='please enter your telephone'
                            icon='teletype' />
                        <Form.Input
                            label='E-mail'
                            placeholder='please enter your email'
                            icon='mail' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            label='old password'
                            placeholder='please enter old password'
                            icon='unlock' />
                        <Form.Input
                            label='new password'
                            placeholder='please enter new password'
                            icon='unlock' />
                            <Form.Input
                            label='new password re-enter'
                            placeholder='please enter new password again'
                            icon='lock' />
                    </Form.Group>
                    <Button inverted color='red'>Apply</Button>
                </Form>
            </Segment>
        </Container>
    )
}
