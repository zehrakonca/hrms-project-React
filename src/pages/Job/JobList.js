/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Grid, Header, Icon, Label, Segment, Table } from 'semantic-ui-react';
import JobService from '../../services/jobService';
import SectorService from '../../services/sectorService';
import { Formik, useFormik } from 'formik';
import * as Yup from "yup";
import MessageModal from '../../layouts/Dashboard/MessageModal';

function JobList() {

    const [jobs, setJobs] = useState([]);
    const [sectors, setSectors] = useState([]);
    const [open, setOpen] = useState(false);

    let jobService = new JobService();
    let sectorService = new SectorService();

    useEffect(() => {
        jobService.getAllJob().then((result) => setJobs(result.data.data));
        sectorService.getSectors().then((result) => setSectors(result.data.data));
    });

    const sectorOptions = sectors.map((sector) => ({
        key: sector.id,
        text: sector.sector,
        value: sector,
    }));

    const initialValues = {
        jobName: "",
        sector: "",
    };

    const validationSchema = Yup.object({
        jobName: Yup.string().required("required field"),
        sector: Yup.object().required("required field"),
    });


    // function refreshPage() {
    //     window.location.reload();
    // }

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        jobService.addJob(values);
        handleModal(true);
        setTimeout(() => {
            resetForm();
        }, 100);
    };

    const handleDelete = async (id) => {
        let jobService = new JobService();
        console.log(id);
        jobService.deleteJob(id);
    }

    const handleModal = (value) => {
        setOpen(value);
    };

    const handleChange = (fieldName, value) => {
        formik.setFieldValue(fieldName, value);
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit,
    });

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
                                <Formik>
                                    <Form dividing onSubmit={formik.handleSubmit} style={{ margin: "0.5em" }}>
                                        <Form.Input
                                            name='jobName'
                                            placeholder='please enter job name...'
                                            onChange={(event, data) => handleChange("jobName", data.value)}
                                            value={formik.values.jobName}
                                        />
                                        {formik.errors.jobName && formik.touched.jobName && <span><Label basic pointing color="orange" content={formik.errors.jobName} /><br /></span>}
                                        <Form.Select
                                            name="sector"
                                            label='Sector'
                                            placeholder="select sector."
                                            options={sectorOptions}
                                            onChange={(event, data) => handleChange("sector", data.value)}
                                            value={formik.values.sector.sectorId}
                                        >
                                        </Form.Select>
                                        {formik.errors.sector && formik.touched.sector && <span><Label basic pointing color="orange" content={formik.dirtyerrors.sector} /><br /></span>}
                                        <Button inverted color="orange" type="submit">Submit</Button>
                                    </Form>
                                   
                                </Formik>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <MessageModal onClose={() => handleModal(false)} onOpen={() => handleModal(true)} open={open} content="changes are saved." />
            </Segment>
        </Container>
    )
}

export default JobList;