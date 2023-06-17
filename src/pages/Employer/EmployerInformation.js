import React from 'react'
import { Button, Container, Form, Segment } from 'semantic-ui-react'

export default function EmployerInformation() {
    return (
            <Segment raised>
                <Form widths='equal'>
                    <Form.Group>
                        <Form.Input
                        label='company name'
                        placeholder= 'please enter company name' />
                        <Form.Input
                        label='web site name'
                        placeholder= 'web site name' />
                        <Form.Input
                        label='company mail'
                        placeholder= 'please enter company mail' />
                    </Form.Group>
                    <Form.Group>
                        <Form.TextArea
                        label='company description'
                        placeholder='please enter company description..'/>
                    </Form.Group>
                    <Button inverted color='red'>Apply</Button>
                </Form>
            </Segment>
    )
}
