import React, { useState,useEffect } from 'react'
import { Button,Divider,Icon,Item, Pagination, Segment } from 'semantic-ui-react'
import JobAdvertisementService from '../../services/jobAdvertisementService';

export default function JobAdvertisement() {
  
  const [jobAdvertisements, setjobAdvertisements] = useState([])
  
  useEffect(()=> {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAdvertisements()
      .then(result=>setjobAdvertisements(result.data.data))},[])

  return (
    <Segment  style= {{margin:"2em"}}>
      {jobAdvertisements.map((jobAdvertisement) => (
            <Item.Group dividing key={jobAdvertisement.id}>
            <Item>
              <Icon name='recycle' size='massive' />
              <Item.Content>
              <Item.Header as='a' floated='left'>
                      {jobAdvertisement.advertisementName}
                    </Item.Header>
                <Item.Header as='a' floated='left'>
                </Item.Header>
                <Item.Meta floated='left'>
                </Item.Meta>
                <Item.Extra>{jobAdvertisement.companyName}, {jobAdvertisement.cityName}</Item.Extra>
                <Item.Description floated='left'>{jobAdvertisement.jobDescription}</Item.Description>
                <span>{jobAdvertisement.sectorName}, {jobAdvertisement.workTypeName}</span>
                <Item.Extra>
                  <Button color="orange" floated='right' as="a">
                    Apply
                      <Icon name='right chevron' />
                  </Button>
                </Item.Extra>
              </Item.Content>
            </Item>
            <Divider clearing/>
          </Item.Group>
          ))}
      <Pagination defaultActivePage={1} disabled totalPages={5} />
  </Segment>
      )
      }