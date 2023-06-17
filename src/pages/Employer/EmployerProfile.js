import React from 'react'
import { Container, Grid, Header, Image, Input, Menu, Segment } from 'semantic-ui-react'

export default function EmployerProfile() {

    return (
        <Container style={{ margin: "1em", marginBottom:"12em"}}>
            <Segment raised>
                <Header as='h2' attached='top'>
                    Hanooğ evrinyan! -company-
                </Header>
                <Segment attached>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </Segment>
                <br/>
                <Grid>
                    <Grid.Column width={4}>
                        <Menu fluid vertical tabular>
                            <Menu.Item
                                name='Profile'
                                icon='user'
                            // active={activeItem === 'bio'}
                            // onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='Your Advertisements'
                                icon='unordered list'

                            />
                            <Menu.Item
                                name='Add Advertisements'
                                icon='plug'

                            />
                            <Menu.Item
                                name='Settings'
                                icon='setting'

                            />
                        </Menu>
                    </Grid.Column>

                    <Grid.Column stretched width={12}>
                        <Segment>
                            This is an stretched grid column. This segment will always match the
                            tab height
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Container>
    )
}
