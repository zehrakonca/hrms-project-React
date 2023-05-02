import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Header, Segment, Icon, Grid, Button, GridColumn, Divider, Card, List,Container } from 'semantic-ui-react';
import JobAdvertisementService from '../../services/jobAdvertisementService';

export default function JobAdvertisementDetail() {

  let { id } = useParams();
  const [jobAdvertisement, setJobAdvertisement] = useState([]);

  useEffect(() => {
      let jobAdvertisementService = new JobAdvertisementService();
      jobAdvertisementService.getByAdvertisementId(id).then((result => setJobAdvertisement(result.data.data))
      )
  }, [id]);

  return (
    <div style={{margin:'1em'}}>
      <Container>
    <Segment>
        <Grid>
            <Grid.Row>
                <Grid.Column width={10}>
                    <Header as='h2'>
                        <Icon name='flag checkered' />
                        <Header.Content>
                        {jobAdvertisement.advertisementName}
                            <Header.Subheader>{jobAdvertisement.companyName}</Header.Subheader>
                            <Header.Subheader>{jobAdvertisement.cityName}</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button
                        size="medium"
                        circular
                        floated="right"
                        inverted color="orange">Apply now!
                    </Button>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={11}>
                    <Segment>
                        Job Advertisement Image
                    </Segment>
                    <Segment>
                        <Header as='h2' floated='right'>
                            general qualifications and job description
                        </Header>
                        <Divider clearing />
                        <p>
                            companyDescription(eklenecek)
                        </p>
                        <Header as='h2' floated='left'>Job description</Header>
                        <Divider clearing />
                        <p>
                        {jobAdvertisement.jobDescription}
                        </p>
                        <Card.Group>
                            <Card fluid color='orange'>
                                <Card.Content>
                                    <Header as="h3"> <Icon name='info' />candidate criteria</Header>
                                </Card.Content>
                                <Segment>
                                    <List size="large">
                                        <List.Item>
                                            <List.Icon name="sign language" />
                                            <List.Content>experience: experience (eklenecek)</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Icon name="compass outline" />
                                            <List.Content>military status: militarystatu(eklenecek)</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Icon name="chess king" />
                                            <List.Content>education level: education level(eklenecek)</List.Content>
                                        </List.Item>
                                    </List>
                                </Segment>
                            </Card>
                            <Card fluid color='orange'>
                                <Card.Content>
                                    <Header as="h3"> <Icon name='info' />job information</Header>
                                </Card.Content>
                                <Segment>
                                    <List size="large">
                                        <List.Item>
                                            <List.Icon name="chess board" />
                                            <List.Content>Sector : {jobAdvertisement.sectorName}</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Icon name="pencil alternate" />
                                            <List.Content>position level : positionlevelName(eklenecek)</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Icon name="map signs" />
                                            <List.Content>way of working : {jobAdvertisement.workTypeName}</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Icon name="child" />
                                            <List.Content>personal number: {jobAdvertisement.numberOfVacancies}</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Icon name="map marker alternate" />
                                            <List.Content>city : {jobAdvertisement.cityName}</List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Icon name="dollar sign" />
                                            <List.Content>offered fee : {jobAdvertisement.jobSalaryMin} - {jobAdvertisement.jobSalaryMax}</List.Content>
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
                                    <Header as="h5">Sector : {jobAdvertisement.sectorName}</Header>
                                    <Header as="h5">Company : {jobAdvertisement.companyName}</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <GridColumn>
                                    <Button.Group
                                        size="mini"
                                        style={{ marginRight: '0.5em' }}
                                        inverted color="orange">
                                        <Button>Google it!</Button>
                                        <Button>Company Profile</Button>
                                        <Button>Open Positions</Button>
                                    </Button.Group>
                                </GridColumn>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Segment basic color="orange">
                                        Last Date: {jobAdvertisement.applicationDate}
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
</div>
  )
}
