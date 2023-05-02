import React from 'react'
import {Grid, Header, Icon,} from 'semantic-ui-react'
import JobAdvertisement from './JobAdvertisement'
import Count from './Count'

export default function Dashboard() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
            </Grid.Column>
                <Grid.Column width={16}>
                  <Header as='h3'>
                    <Icon name='braille' />
                      <Header.Content>today's new</Header.Content>
                      </Header>
                  <JobAdvertisement/>
                  <Count/>
                </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }