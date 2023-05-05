import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Grid, Header, Icon, Label, Segment, Table } from 'semantic-ui-react'
import { Formik, useFormik } from 'formik';
import * as Yup from "yup";
import MessageModal from '../../layouts/Dashboard/MessageModal';
import FacultyService from '../../services/facultyService'

function Faculty() {

  const [faculties, setFaculties] = useState([]);
  const [open, setOpen] = useState(false);

  let facultyService = new FacultyService();

  useEffect(() => {
    let facultyService = new FacultyService();

    facultyService.getAllFaculty().then((result => setFaculties(result.data.data)))
  }, []);

  const initialValues = {
    faculty: "",
  };

  const validationSchema = Yup.object({
    faculty: Yup.string().required("required field"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    facultyService.addFaculty(values);
    handleModal(true);
    setTimeout(() => {
      resetForm();
    }, 100);
  };

  const handleDelete = async (id) => {
    let facultyService = new FacultyService();
    console.log(id);
    facultyService.deleteFaculty(id);
    handleModal(true);
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  const handleModal = (value) => {
    setOpen(value);
  };

  const handleChange = (fieldName, value) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <Container style={{ margin: "1em" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Table singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {faculties.map((faculty) => (
                  <Table.Row>
                    <Table.Cell>{faculty.facultyName}</Table.Cell>
                    <Table.Cell textAlign='right'>
                    <Button icon basic color="orange">
                        <Icon name='pencil' />
                      </Button>
                      <Button icon basic color="orange" onClick={() => handleDelete(faculty.id)}>
                        <Icon name='cancel' />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment>
              <Header as='h3' dividing>
                <Icon name='pencil alternate' />  Add Faculty
              </Header>
              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Input
                    name='faculty'
                    placeholder='please enter faculty...'
                    onChange={(event, data) => handleChange("faculty", data.value)}
                    value={formik.values.faculty}
                  />
                  {formik.errors.faculty && formik.touched.faculty && <span><Label basic pointing color="orange" content={formik.errors.faculty} /><br /></span>}
                  <Button color="orange" type="submit" content="Add">Submit</Button>
                </Form>
              </Formik>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <MessageModal onClose={() => handleModal(false)} onOpen={() => handleModal(true)} open={open} content="changes are saved." />
    </Container >
  )
}

export default Faculty;