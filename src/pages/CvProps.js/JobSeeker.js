import React, { useState } from 'react'
import { Button, Container, Form, Grid, Header, Icon, Segment, Image, Label } from 'semantic-ui-react'
import JobSeekerService from '../../services/jobSeekerService';
import { Formik, useFormik } from 'formik';
import * as Yup from "yup";
import MessageModal from '../../layouts/Dashboard/MessageModal';
import meeting from '../../img/meeting3.jpg';

function JobSeeker() {
    const [open, setOpen] = useState(false);

    let jobSeekerService = new JobSeekerService();

    const initialValues = {
        firstName: "",
        lastName: "",
        telephone: "",
        email: "",
        nationalIdentity: "",
        date: "",
        password: "",
        passwordRep: ""
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required("required field"),
        lastName: Yup.string().required("required field"),
        telephone: Yup.string().required("required field"),
        email: Yup.string().required("required field"),
        nationalIdentity: Yup.string().required("required field"),
        date: Yup.string().required("required field"),
        password: Yup.string().required("required field"),
        passwordRep: Yup.string().required("required field"),
    });

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        jobSeekerService.addJobSeeker(values);
        handleModal(true);
        setTimeout(() => {
            resetForm();
        }, 100);
        refreshPage();
    };

    function refreshPage() {
        window.location.reload();
    }
    const handleModal = (value) => {
        setOpen(value);
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit,
    });

    const handleChange = (fieldName, value) => {
        formik.setFieldValue(fieldName, value);
    };

    return (
        <Container style={{ margin: "1em" }}>
            <Segment>
                <Header as='h3' disabled dividing>
                    <Icon name='lab' />
                    <Header.Content>Sign up and join us!</Header.Content>
                </Header>
                <Grid>
                    <Grid.Column width={8} centered>
                        <Formik>
                            <Form onSubmit={formik.handleSubmit}>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        name="firstName"
                                        label="First name"
                                        placeholder="First name"
                                        onChange={(event, data) => handleChange("firstName", data.value)}
                                        value={formik.values.firstName}
                                    />
                                    {formik.errors.firstName && formik.touched.firstName && <span><Label size basic pointing='left' color="orange" content={formik.errors.firstName} /><br /><br /></span>}
                                    <Form.Input
                                        name="lastName"
                                        label="lastname"
                                        placeholder="Last name"
                                        onChange={(event, data) => handleChange("lastName", data.value)}
                                        value={formik.values.lastName}
                                    />
                                    {formik.errors.lastName && formik.touched.lastName && <span><Label basic pointing='left' color="orange" content={formik.errors.lastName} /><br /><br /></span>}
                                </Form.Group>
                                <Form.Input
                                    name="email"
                                    label='email'
                                    placeholder='Please enter your email address.(example: jon@mail.com)'
                                    onChange={(event, data) => handleChange("email", data.value)}
                                    value={formik.values.email}
                                />
                                {formik.errors.email && formik.touched.email && <span><Label basic pointing color="orange" content={formik.errors.email} /><br /><br /></span>}
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        name="password"
                                        label='password'
                                        placeholder='your passsword'
                                        type='password'
                                        onChange={(event, data) => handleChange("password", data.value)}
                                        value={formik.values.password}
                                    />
                                    {formik.errors.password && formik.touched.password && <span><Label basic pointing='left' color="orange" content={formik.errors.password} /><br /><br /></span>}
                                    <Form.Input
                                        name='passwordRep'
                                        label='password repeat'
                                        placeholder='your password repeat'
                                        type='password'
                                        onChange={(event, data) => handleChange("passwordRep", data.value)}
                                        value={formik.values.passwordRep}
                                    />
                                    {formik.errors.passwordRep && formik.touched.passwordRep && <span><Label basic pointing='left' color="orange" content={formik.errors.passwordRep} /><br /><br /></span>}
                                </Form.Group>
                                <Form.Input
                                    name='telephone'
                                    label='telephone'
                                    placeholder='Please enter your telephone number'
                                    onChange={(event, data) => handleChange("telephone", data.value)}
                                    value={formik.values.telephone}
                                />
                                {formik.errors.telephone && formik.touched.telephone && <span><Label basic pointing color="orange" content={formik.errors.telephone} /><br /><br /></span>}
                                <Form.Input
                                    name='nationalIdentity'
                                    label='national identity'
                                    placeholder='Please enter your national identity'
                                    onChange={(event, data) => handleChange("nationalIdentity", data.value)}
                                    value={formik.values.nationalIdentity}
                                />
                                {formik.errors.nationalIdentity && formik.touched.nationalIdentity && <span><Label basic pointing color="orange" content={formik.errors.nationalIdentity} /><br /><br /></span>}
                                <Form.Input
                                    name='date'
                                    label='date'
                                    placeholder='Please enter your date.(example: 1996)'
                                    onChange={(event, data) => handleChange("date", data.value)}
                                    value={formik.values.date}
                                />
                                {formik.errors.date && formik.touched.date && <span><Label basic pointing color="orange" content={formik.errors.date} /><br /><br /></span>}
                                <Form.Checkbox label='I agree to the Terms and Conditions' />
                                <Button color="orange">Sign Up</Button>
                            </Form>
                        </Formik>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Image src={meeting} centered></Image>
                    </Grid.Column>
                </Grid>
            </Segment>
            <MessageModal onClose={() => handleModal(false)} onOpen={() => handleModal(true)} open={open} content="An activation e-mail has been sent !" />
        </Container>
    )
}

export default JobSeeker;