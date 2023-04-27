import React, { useEffect, useState } from 'react'
import { Checkbox, Divider, Dropdown, Menu } from 'semantic-ui-react'
import SectorService from '../../services/sectorService';


export default function SideMenu() {
  const [sectors, setsSectors] = useState([]);

  useEffect(() => {
    let sectorService = new SectorService();
    sectorService
      .getSectors()
      .then((result) => setsSectors(result.data.data));
  });
  
  const getAllSectors = sectors.map((sector, index) => ({
    key: index,
    text: sector.sectorName,
    value: sector.sectorId
  }))

  return (
    <Menu vertical style= {{marginTop:"2em"}}>
    <Menu.Item>
      <Menu.Header>City</Menu.Header>
      <Menu.Menu>
        <Dropdown  placeholder='choose city' selection style= {{margin:"0.5em"}} />
      </Menu.Menu>
    </Menu.Item>
    <Divider clearing/>
    <Menu.Item>
      <Menu.Header>Work Place</Menu.Header>
      <Menu.Menu vertical  style= {{margin:"0.5em"}}>
        <Checkbox label='work from home' /><br />
        <Checkbox label='hybrid' /><br />
        <Checkbox label='at the workplace' /><br />
      </Menu.Menu>
    </Menu.Item>
    <Divider clearing/>
    <Menu.Item>
      <Menu.Header>Sector</Menu.Header>
      <Menu.Menu>
        <Dropdown  placeholder='choose sector'  selection  style= {{margin:"0.5em"}} />
      </Menu.Menu>
    </Menu.Item>
    <Divider clearing/>
    <Menu.Item>
      <Menu.Header>Work Type</Menu.Header>
      <Menu.Menu vertical  style= {{margin:"0.5em"}}>
        <Checkbox label='full time' /><br />
        <Checkbox label='period/project based' /><br />
        <Checkbox label='intern' /><br />
      </Menu.Menu>
    </Menu.Item>
    <Divider clearing/>
    <Menu.Item>
      <Menu.Header>Education</Menu.Header>
      <Menu.Menu vertical  style= {{margin:"0.5em"}}>
        <Checkbox label='postgraduate, graduate' /><br />
        <Checkbox label='bachelor level,graduate' /><br />
        <Checkbox label='associate Degree' /><br />
      </Menu.Menu>
    </Menu.Item>
    <Divider clearing/>
    </Menu>
  )
}
