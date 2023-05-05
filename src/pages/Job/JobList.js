import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Grid, Header, Icon, Message, Segment, Table } from 'semantic-ui-react';
import JobService from '../../services/jobService';
import SectorService from '../../services/sectorService';

function JobList() {

    const [jobs, setJobs] = useState([]);
    const [sectors, setSectors] = useState([]);
    const [formValueJob, setFormValueJob] = useState({ job: '', sectorId: '' });

    useEffect(() => {
        let jobService = new JobService();
        jobService.getAllJob().then((result => setJobs(result.data.data)))
    }, []);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormValueJob({ ...formValueJob, [name]: value });
    }

    const getSector = (e) => {
        let sectorService = new SectorService();
        sectorService.getSectors().then((result => setSectors(result.data.data)))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const allInputValue = { sector: formValueJob.sectorId, jobName: formValueJob.job };
        let jobService = new JobService();
        jobService.addJob(allInputValue);
        jobService.getAllJob();
        console.log(allInputValue);
    }

    const handleDelete = async (id) => {
        let jobService = new JobService();
        console.log(id);
        jobService.deleteJob(id);
        jobService.getSectors();
    }


    return (
        <Container style={{ margin: "1em" }}>
            <Segment>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Table singleLine>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Job Name</Table.HeaderCell>
                                        <Table.HeaderCell>Sector</Table.HeaderCell>
                                        <Table.HeaderCell></Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {jobs.map((job) => (
                                        <Table.Row>
                                            <Table.HeaderCell>{job.job}</Table.HeaderCell>
                                            <Table.HeaderCell>{job.sectorName}</Table.HeaderCell>
                                            <Table.HeaderCell textAlign='right'>
                                                <Button icon basic color="orange" onClick={() => handleDelete(job.id)}>
                                                    <Icon name='cancel' />
                                                </Button>
                                            </Table.HeaderCell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Segment>
                                <Header as='h3' dividing>
                                    <Icon name='archive' />  Add Job
                                </Header>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Input name='job' placeholder='please enter job name...' value={formValueJob.jobName} onChange={handleInput} />
                                    <Form.Select name='sectorId' placeholder='select sector' value={formValueJob.sectorId} onChange={e => setSectors(e.target.value)}>
                                        {/* <option>{sector.sector}</option> */}
                                    </Form.Select>

                                    <Button color="orange" onClick={handleSubmit} type='submit'>Submit</Button>
                                </Form>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Container>
    )
}

export default JobList;