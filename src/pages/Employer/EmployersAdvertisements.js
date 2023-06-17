import React from 'react'
import { Button, Container, Divider, Icon, Item, Segment } from 'semantic-ui-react'

export default function EmployersAdvertisements() {
  return (
    <Container>
    <Segment size='mini'>
        <Item.Group dividing>
          <Item>
            <Icon name='recycle' size='massive' />
            <Item.Content>
              <Item.Header as='a' floated='left'>
              advertisement name
              </Item.Header>
              <Item.Header as='a' floated='left'>
              </Item.Header>
              <Item.Meta floated='left'>
              </Item.Meta>
              <Item.Extra>company name, city</Item.Extra>
              <Item.Description floated='left'>job description</Item.Description>
              <span>sector, work type</span>
              <Item.Extra>
                <Button inverted color="red" floated='right'>
                    view
                    <Icon name='right chevron' s/>
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Divider clearing />
        </Item.Group>
    </Segment>
    </Container>
  )
}
