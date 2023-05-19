import React, { useState,useEffect } from 'react'
import { Button,Divider,Icon,Item, Pagination, Segment } from 'semantic-ui-react'
import JobAdvertisementService from '../../services/jobAdvertisementService';
import { Link, NavLink } from 'react-router-dom';

export default function JobAdvertisement() {
  
  const [jobAdvertisements, setjobAdvertisements] = useState([])
  
  let jobAdvertisementService = new JobAdvertisementService();

  useEffect(()=> {
    jobAdvertisementService.getActiveAdvertisements().then(result=>setjobAdvertisements(result.data.data));
  },[]);

  return (
    <Segment  style= {{margin:"2em"}}>
      {jobAdvertisements.map((jobAdvertisement) => (
            <Item.Group dividing key={jobAdvertisement.id}>
            <Item>
              <Icon name='recycle' size='massive' />
              <Item.Content>
              <Item.Header as='a' floated='left'>
                  <Link to={`/advertisement/${jobAdvertisement.advertisementId}`}
                  style={{color:"black"}}>
                    {jobAdvertisement.advertisementName}
                  </Link>
                </Item.Header>
                <Item.Header as='a' floated='left'>
                </Item.Header>
                <Item.Meta floated='left'>
                </Item.Meta>
                <Item.Extra>{jobAdvertisement.companyName}, {jobAdvertisement.cityName}</Item.Extra>
                <Item.Description floated='left'>{jobAdvertisement.jobDescription}</Item.Description>
                <span>{jobAdvertisement.sectorName}, {jobAdvertisement.workTypeName}</span>
                <Item.Extra>
                  <Button inverted color="orange" floated='right' as={NavLink}>
                    <Link to={`/advertisement/${jobAdvertisement.advertisementId}`}
                    style={{color:"white"}}>
                      Apply
                      <Icon name='right chevron' />
                    </Link>
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