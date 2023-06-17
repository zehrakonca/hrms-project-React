import React from 'react'
import { Button, Card, Container, Divider, Grid, Header, Icon, List, Segment } from 'semantic-ui-react'

export default function Advertisement() {
    return (
        <Container style={{margin:'1em'}}>
            <Segment>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={9}>
                            <Header as='h3'>
                                <Icon name='flag checkered' />
                                <Header.Content>
                                    advertisement Name
                                    <Header.Subheader>company name</Header.Subheader>
                                    <Header.Subheader>city</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Button
                                size="medium"
                                floated="right"
                                color="red">Edit
                            </Button>
                            <Button
                                size="medium"
                                floated="right"
                                color="red">Delete
                            </Button>
                            <Button
                                size="medium"
                                floated="right"
                                inverted color="red">See Applicants
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={11}>
                            <Segment>
                                Job Advertisement Image
                            </Segment>
                            <Segment>
                                <Header as='h3' floated='right'>
                                    general qualifications and job description
                                </Header>
                                <Divider clearing />
                                <p>
                                    companyDescription
                                </p>
                                <Header as='h3' floated='left'>Job description</Header>
                                <Divider clearing />
                                <p>
                                    jobDescription
                                </p>
                                <Card.Group>
                                    <Card fluid color='red'>
                                        <Card.Content>
                                            <Header as="h3"> <Icon name='info' />candidate criteria</Header>
                                        </Card.Content>
                                        <Segment>
                                            <List size="large">
                                                <List.Item>
                                                    <List.Icon name="sign language" />
                                                    <List.Content>experience: experience </List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Icon name="compass outline" />
                                                    <List.Content>military status: military Statu</List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Icon name="chess king" />
                                                    <List.Content>education level: education Type Name </List.Content>
                                                </List.Item>
                                            </List>
                                        </Segment>
                                    </Card>
                                    <Card fluid color='red'>
                                        <Card.Content>
                                            <Header as="h3"> <Icon name='info' />job information</Header>
                                        </Card.Content>
                                        <Segment>
                                            <List size="large">
                                                <List.Item>
                                                    <List.Icon name="chess board" />
                                                    <List.Content>Sector : sector Name</List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Icon name="pencil alternate" />
                                                    <List.Content>position level : position Level Name</List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Icon name="map signs" />
                                                    <List.Content>way of working : work Type Name </List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Icon name="child" />
                                                    <List.Content>personal number: number Of Vacancies</List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Icon name="map marker alternate" />
                                                    <List.Content>city : city</List.Content>
                                                </List.Item>
                                                <List.Item>
                                                    <List.Icon name="dollar sign" />
                                                    <List.Content>offered fee : jobSalary</List.Content>
                                                </List.Item>
                                            </List>
                                        </Segment>
                                    </Card>
                                </Card.Group>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Segment>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Segment>Company Image</Segment>
                                            <Header as="h5">Sector : sector</Header>
                                            <Header as="h5">Company : company</Header>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={5}>
                                            <Button.Group
                                                size="mini"
                                                style={{ marginRight: '0.5em', display: 'flex', width:'5em'}}
                                                inverted
                                                color="red"
                                            >
                                                <Button style={{ flexShrink: 1 }}>Google it!</Button>
                                                <Button style={{ flexShrink: 1 }}>Company Profile</Button>
                                                <Button style={{ flexShrink: 1 }}>Open Positions</Button>
                                            </Button.Group>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Segment basic color="red">
                                                Last Date: applicationDate
                                            </Segment>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Container>
    )
}
