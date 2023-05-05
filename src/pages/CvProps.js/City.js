import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Grid, Header, Icon, Label, Segment, Table } from 'semantic-ui-react'
import CityService from '../../services/cityService';
import { Formik, useFormik } from 'formik';
import * as Yup from "yup";
import MessageModal from '../../layouts/Dashboard/MessageModal';

function City() {

  const [cities, setCities] = useState([]);
  const [open, setOpen] = useState(false);

  let cityService = new CityService();

  useEffect(() => {
    let cityService = new CityService();

    cityService.getAllCity().then((result => setCities(result.data.data)))
  }, []);

  const initialValues = {
    cityName: "",
  };

  const validationSchema = Yup.object({
    cityName: Yup.string().required("required field"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    cityService.addCity(values);
    handleModal(true);
    setTimeout(() => {
      resetForm();
    }, 100);
    refreshPage();
  };

  const handleDelete = async (id) => {
    let cityService = new CityService();
    console.log(id);
    cityService.deleteCity(id);
    handleModal(true);
    refreshPage();
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

  function refreshPage() {
    window.location.reload();
  }
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
                {cities.map((cityName) => (
                  <Table.Row>
                    <Table.Cell>{cityName.cityName}</Table.Cell>
                    <Table.Cell textAlign='right'>
                      <Button icon basic color="orange" onClick={() => handleDelete(cityName.cityId)}>
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
                <Icon name='map pin' />  Add city
              </Header>
              <Formik>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Input
                    name='cityName'
                    placeholder='please enter city...'
                    onChange={(event, data) => handleChange("cityName", data.value)}
                    value={formik.values.cityName}
                  />
                  {formik.errors.cityName && formik.touched.cityName && <span><Label basic pointing color="orange" content={formik.errors.cityName} /><br /></span>}
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

export default City;