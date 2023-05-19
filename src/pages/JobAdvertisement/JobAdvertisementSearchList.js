import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import SideMenu from '../../layouts/Dashboard/SideMenu'
import '../../App.css';
import JobAdvertisement from './JobAdvertisement';

export default function JobAdvertisementSearchList() {
  return (
    <Container>
    <div className="App">
         <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <SideMenu/>
            </Grid.Column>
                <Grid.Column width={12}>
                <JobAdvertisement/>
                </Grid.Column>
          </Grid.Row>
        </Grid>
    </div>
    </Container>
  )
}
