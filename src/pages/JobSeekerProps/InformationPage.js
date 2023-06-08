import { useFormik } from 'formik';
import React, { useContext, useEffect, useState } from 'react'
import { Form } from 'semantic-ui-react';
import { UserContext } from '../../contexts/UserProvider';
import JobSeekerService from '../../services/jobSeekerService';

export default function InformationPage() {

  const { user } = useContext(UserContext);
  const [jobSeeker, setJobSeeker] = useState(null);
  const [open, setOpen] = useState([])

  let jobSeekerService = new JobSeekerService();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await jobSeekerService.getById(user.data?.id);
        setJobSeeker(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);


  const formik = useFormik({
    initialValues: {
      id : user && user.data ? user.data.id : '',
      firstName: user && user.data ? user.data.firstName : 'none',
      lastName: user && user.data ? user.data.lastName : 'none',
      telephone: user && user.data ? user.data.telephone : 'none',
      email: user && user.data ? user.data.email : 'none',
      password: user && user.data ? user.data.password : 'none',
      passwordRep: user && user.data ? user.data.passwordRep : 'none',
    },
    onSubmit: (values) => {
      console.log(values);
      jobSeekerService.updateJobSeeker(values);
      //window.location.reload()
    }
  });

  const handleModal = (value) => {
    setOpen(value);
  };

  const handleChange = (fieldName, value) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
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
      <Form.Group widths='equal'>
        <Form.Input
          name="password"
          label='Password'
          placeholder='Password'
          type='password'
          onChange={(event, data) => handleChange("password", data.value)}
          value={formik.values.password}
        />
        <Form.Input
          name="passwordRep"
          label='Password Repeat'
          placeholder='Password Repeat'
          type='password'
          onChange={(event, data) => handleChange("passwordRep", data.value)}
          value={formik.values.passwordRep}
        />
      </Form.Group>
      <Form.Button inverted color='orange' type="submit">Save</Form.Button>
    </Form>
  );
}
