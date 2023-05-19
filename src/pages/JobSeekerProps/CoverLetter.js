import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Grid, Header, Icon, Label, Segment, Table } from 'semantic-ui-react';
import CoverLetterService from '../../services/coverLetterService';
import * as Yup from "yup";
import { Formik, useFormik } from 'formik';

function CoverLetter() {

    const [coverLetters, setCoverLetters] = useState([])
    const [open, setOpen] = useState([])

    let coverLetterService = new CoverLetterService();

    useEffect(() => {
        coverLetterService.getAllCoverLetter().then((result) => setCoverLetters(result.data.data));
    }, []);

    const initialValues = {
        coverLetterTitleName:"",
        coverLetter: "",
        jobSeekerId: 22,
    }

    const validationSchema = Yup.object({
        coverLetter: Yup.string().required("required field"),
        coverLetterTitleName: Yup.string().required("required field"),
    })

    function refreshPage() {
        window.location.reload();
    }

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        coverLetterService.addCoverLetter(values);
        handleModal(true);
        setTimeout(() => {
            resetForm();
        }, 100);
        refreshPage();
    };

    const handleDelete = async (id) => {
        console.log(id);
        coverLetterService.deleteCoverLetter(id);
        refreshPage();
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
                <Header as='h3' disabled dividing>
                    <Icon name='clipboard outline' />
                    <Header.Content>Cover Letter</Header.Content>
                </Header>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Formik>
                                <Form dividing onSubmit={formik.handleSubmit}>
                                <Form.Input
                                        label='Cover Letter Title'
                                        name='coverLetterTitleName'
                                        placeholder='please enter your cover letter title.'
                                        onChange={(event, data) => handleChange("coverLetterTitleName", data.value)}
                                        value={formik.values.coverLetterTitleName}
                                    />
                                    {formik.errors.coverLetterTitleName && formik.touched.coverLetterTitleName && <span><Label basic pointing color="orange" content={formik.errors.coverLetterTitleName} /><br /></span>}
                                    <Form.TextArea
                                        label='Cover Letter'
                                        name='coverLetter'
                                        placeholder='please enter your cover letter..'
                                        onChange={(event, data) => handleChange("coverLetter", data.value)}
                                        value={formik.values.coverLetter}
                                    />
                                    {formik.errors.coverLetter && formik.touched.coverLetter && <span><Label basic pointing color="orange" content={formik.errors.coverLetter} /><br /></span>}
                                    <Button animated='fade' inverted color='orange' type='submit'>
                                        <Button.Content visible>Add</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='thumbtack' />
                                        </Button.Content>
                                    </Button>
                                </Form>
                            </Formik>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Table striped>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2'>Your Abilities</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {coverLetters.map((coverLetter) =>
                                        <Table.Row>
                                            <Table.Cell>{coverLetter.coverLetterTitleName}</Table.Cell>
                                            <Table.Cell>{coverLetter.coverLetter}</Table.Cell>
                                              <Table.Cell>{coverLetter.jobSeekerId}</Table.Cell>
                                            <Table.Cell textAlign='right'>
                                                <Button icon inverted color="orange">
                                                    <Icon name='pencil' />
                                                </Button>
                                                <Button icon inverted color="orange"
                                                    onClick={() => handleDelete(coverLetter.id)}>
                                                    <Icon name='cancel' />
                                                </Button>
                                            </Table.Cell>
                                        </Table.Row>
                                    )}
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Container>
    )
}
export default CoverLetter;
