import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Grid, Header, Icon, Label, Segment, Table } from 'semantic-ui-react'
import WorkTypeService from '../../services/workTypeService';
import { Formik, useFormik } from 'formik';
import * as Yup from "yup";
import MessageModal from '../../layouts/Dashboard/MessageModal';

function TypeOfWork() {

  const [typeOfWorks, setTypeOfWorks] = useState([]);
  const [open, setOpen] = useState(false);

  let workTypeService = new WorkTypeService();

  useEffect(() => {
    let workTypeService = new WorkTypeService();

    workTypeService.getAllWorkType().then((result => setTypeOfWorks(result.data.data)))
  }, []);

  const initialValues = {
    typeName: "",
  };

  const validationSchema = Yup.object({
    typeName: Yup.string().required("required field"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    workTypeService.addWorkType(values);
    handleModal(true);
    setTimeout(() => {
      resetForm();
    }, 100);
  };

  const handleDelete = async (id) => {
    let workTypeService = new WorkTypeService();
    console.log(id);
    workTypeService.deleteWorkType(id);
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
                {typeOfWorks.map((typeOfWork) => (
                  <Table.Row>
                    <Table.Cell>{typeOfWork.typeName}</Table.Cell>
                    <Table.Cell textAlign='right'>
                      <Button icon basic color="orange" onClick={() => handleDelete(typeOfWork.typeOfWorkId)}>
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
                <Icon name='world' />  Add type OfWork
              </Header>
              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Input
                    name='typeName'
                    placeholder='please enter typeOfWork...'
                    onChange={(event, data) => handleChange("typeName", data.value)}
                    value={formik.values.typeName}
                  />
                  {formik.errors.typeName && formik.touched.typeName && <span><Label basic pointing color="orange" content={formik.errors.typeName} /><br /></span>}
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

export default TypeOfWork;