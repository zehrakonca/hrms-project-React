import React from 'react'
import { Link } from 'react-router-dom'
import { Container, List, Segment } from 'semantic-ui-react'

export default function SiteMap() {
  return (
    <Container style={{ margin: "1em" }}>
      <Segment>
        <List divided>
          <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/jobAdvertisementSearchList">Job advertisement search list</Link>
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/sectorList">sector list</Link>
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/sitemap">site map</Link>
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/dashboard">dashboard</Link>
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/jobList">job list</Link>
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/languageList">language list</Link>
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/faculty">faculty list</Link>
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/positionLevel">position level list</Link>
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/programInfo">program info list</Link>
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/militaryStatuInfo">military Statu info list</Link>
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/universityList">university list</Link>
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/typeOfWork">type of work list</Link>
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/highSchoolTypeList">high school type list</Link>
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/cityList">city list</Link>
              </List.Header>
            </List.Content>
          </List.Item>
           <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/jobSeekerSignUp">jobseeker sign up</Link>
              </List.Header>
            </List.Content>
          </List.Item>
           <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/employer">Employer sign up</Link>
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/ability">Ability list</Link>
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/coverLetter">coverLetter list</Link>
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/educationType">Education type list</Link>
              </List.Header>
            </List.Content>
          </List.Item>
           <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/experience">Job experience list</Link>
              </List.Header>
            </List.Content>
          </List.Item>
           <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/socialMedia">social media list</Link>
              </List.Header>
            </List.Content>
          </List.Item>
            <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/systemEmployeeSignUp">system employee sign up page</Link>
              </List.Header>
            </List.Content>
          </List.Item>
           <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/languageInfo">language info</Link>
              </List.Header>
            </List.Content>
          </List.Item>
           <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/jobExperience">job experience info</Link>
              </List.Header>
            </List.Content>
          </List.Item>
           <List.Item>
            <List.Content>
              <List.Header>
                <Link to="/education">education</Link>
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
           <List.Content>
              <List.Header>
                <Link to="/highSchool">High School</Link>
              </List.Header>
            </List.Content>
          </List.Item>
        </List>
      </Segment>
    </Container>
  )
}
