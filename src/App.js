import './App.css';
import Information from './layouts/Dashboard/Information';
import Dashboard from './layouts/Dashboard/Dashboard';
import Footer from './layouts/Footer/Footer';
import Navigation from './layouts/Navigation/Navigation';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Count from './layouts/Dashboard/Count';
import JobAdvertisement from './pages/JobAdvertisement/JobAdvertisementSearchList';
import JobAdvertisementSearchList from './pages/JobAdvertisement/JobAdvertisementSearchList';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Container>
     <JobAdvertisementSearchList/>
     </Container>
     {/* <Information/>
     <Container className="main">
     <Dashboard/>
     </Container> */}
     <Footer/>
    </div>
  );
}

export default App;
