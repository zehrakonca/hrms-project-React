import { Formik, useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import { Container, Form, Header, Icon } from 'semantic-ui-react';
import { UserContext } from '../../contexts/UserProvider';
import JobSeekerService from '../../services/jobSeekerService';

export default function PersonalInformation() {

    const [open, setOpen] = useState(null);
    const { user } = useContext(UserContext);
    let jobSeekerService = new JobSeekerService();

    const formik = useFormik({
        initialValues: {
            id: user && user.data ? user.data.id : '',
            firstName: user && user.data ? user.data.firstName : 'none',
            lastName: user && user.data ? user.data.lastName : 'none',
            telephone: user && user.data ? user.data.telephone : 'none',
            email: user && user.data ? user.data.email : 'none',
        },
        onSubmit: async (values) => {
            console.log(values);
            try {
                jobSeekerService.updateJobSeeker(values).then(response => {
                    console.log("Güncelleme başarılı");
                    formik.setValues(values);
                    handleModal(true);
                }).catch(error => {
                    console.error("Güncelleme hatası", error);
                });
            } catch (error) {
                console.error("Güncelleme hatası", error);
            }
        }
    });

    const handleModal = (value) => {
        setOpen(value);
    };

    const handleChange = (fieldName, value) => {
        formik.setFieldValue(fieldName, value);
    };

    return (
        <Container>
            <Header as='h4' disabled dividing>
                <Icon name='user' />
                <Header.Content>Personal Information</Header.Content>
            </Header>
            <Formik>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input
                        name="firstName"
                        label='First Name'
                        placeholder='First Name'
                        onChange={(event, data) => handleChange("firstName", data.value)}
                        value={formik.values.firstName}
                    />
                    <Form.Input
                        name="lastName"
                        label='Last Name'
                        placeholder='Last Name'
                        onChange={(event, data) => handleChange("lastName", data.value)}
                        value={formik.values.lastName}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input
                        name="telephone"
                        label='Telephone'
                        placeholder='Telephone'
                        onChange={(event, data) => handleChange("telephone", data.value)}
                        value={formik.values.telephone}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input
                        name="email"
                        label='Email'
                        placeholder='Email'
                        onChange={(event, data) => handleChange("email", data.value)}
                        value={formik.values.email}
                    />
                </Form.Group>
                <Form.Button inverted color='orange' type="submit">Save</Form.Button>
            </Form>
            </Formik>
        </Container>
    )
}
