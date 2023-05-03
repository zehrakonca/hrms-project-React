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
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
