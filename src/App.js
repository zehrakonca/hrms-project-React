import Information from './layouts/Dashboard/Information';
import 'semantic-ui-css/semantic.min.css'
import {Route,Routes} from 'react-router-dom';
import JobAdvertisement from './layouts/Dashboard/JobAdvertisement';
import JobAdvertisementSearchList from './pages/JobAdvertisement/JobAdvertisementSearchList';
import Navigation from './layouts/Navigation/Navigation';
import Footer from './layouts/Footer/Footer';
import JobAdvertisementDetail from './pages/JobAdvertisement/JobAdvertisementDetail';
import JobAdvertisementPost from './pages/JobAdvertisement/JobAdvertisementPost';
import SectorList from './pages/Sector/SectorList';
import Dashboard from './layouts/Dashboard/Dashboard';
import SiteMap from './layouts/Dashboard/SiteMap';
import JobList from './pages/Job/JobList';
import Language from './pages/CvProps.js/Language';
import Faculty from './pages/CvProps.js/Faculty';
import PositionLevel from './pages/CvProps.js/PositionLevel';
import ProgramInfo from './pages/CvProps.js/ProgramInfo';
import MilitaryStatu from './pages/CvProps.js/MilitaryStatu';
import University from './pages/CvProps.js/University';
import TypeOfWork from './pages/CvProps.js/TypeOfWork'

function App() {
  return (
    <div>
    <Navigation/>
     <Routes>
    <Route path="/" element={<Information />} />
    <Route path="/home" element={<Information/>} />
    <Route path="/jobAdvertisement" element={<JobAdvertisement />} />
      <Route path='/advertisement/:id' element={<JobAdvertisementDetail/>}/>
    <Route path="/jobAdvertisementSearchList" element={<JobAdvertisementSearchList />} />
      <Route path='/advertisement/:id'/>
    <Route path="/advertisementPost" element={<JobAdvertisementPost/>}/>
    <Route path='/sectorList' element={<SectorList/>} />
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/sitemap' element={<SiteMap/>} />
    <Route path='/jobList' element={<JobList/>}/>
    <Route path='/languageList' element={<Language/>}/>
    <Route path='/faculty' element={<Faculty/>}/>
    <Route path='/positionLevel' element={<PositionLevel/>}/>
    <Route path='/programInfo' element={<ProgramInfo/>}/>
    <Route path='/militaryStatuInfo' element={<MilitaryStatu/>}/>
    <Route path='/universityList' element={<University/>}/>
    <Route path='/typeOfWork' element={<TypeOfWork/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
