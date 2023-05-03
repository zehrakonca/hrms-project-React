import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Grid, Header, Icon, Message, Segment, Table } from 'semantic-ui-react'
import SectorService from '../../services/sectorService';

function SectorList() {

  const [sectors, setSectors] = useState([]);
  const [formValueSector, setFormValueSector] = useState({ sector: '' });

  useEffect(() => {
    let sectorService = new SectorService();
    sectorService.getSectors().then((result => setSectors(result.data.data)))
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValueSector({ ...formValueSector, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allInputValue = { sector: formValueSector.sector };
    let sectorService = new SectorService();
    sectorService.addSector(allInputValue);
    sectorService.getSectors();
    console.log(allInputValue);
  }

  const handleDelete = async (id) => {
    let sectorService = new SectorService();
    console.log(id);
    sectorService.deleteSector(id);
    sectorService.getSectors();
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
                {sectors.map((sector) => (
                  <Table.Row>
                    <Table.Cell>{sector.sector}</Table.Cell>
                    <Table.Cell textAlign='right'>
                      <Button icon basic color="orange" onClick={() => handleDelete(sector.id)}>
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
                <Icon name='archive' />  Add Sector
              </Header>
              <Form onSubmit={handleSubmit}>
                <Form.Input name='sector' placeholder='please enter sector name...' value={formValueSector.sector} onChange={handleInput} />
                <Button color="orange" onClick={handleSubmit} type='submit'>Submit</Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default SectorList;