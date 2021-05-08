import './App.css';

import Header from './Components/Header';
import WorkExp from "./Components/WorkExp";
import NotifBanner from './Components/framework/NotifBanner';
import EpicComp__viewmore from './Components/EpicComp__viewmore';
import VisaComp__viewmore from './Components/VisaComp__viewmore';
import Viewmore__banner from './Components/Viewmore__banner';
import SkillsHeader from './Components/SkillsHeader';
import Skills__Ecomm from './Components/Skills__Ecomm';
import Skills__Media from './Components/Skills__Media';
import Skills__Programming from './Components/Skills__Programming';
import Welcome from './Components/Welcome';
import JobsHeader from './Components/JobsHeader';
import EcommJobs from './Components/EcommJobs';
import EntertainJobs from './Components/EntertainJobs';
import Education from './Components/Education'
import Footer from './Components/Footer';
import TM from './Components/TM';



import Popup from './Components/framework/popup'

import { Route } from 'react-router-dom';
import { useState } from 'react'

function App() {
  
  const [showProgramming, setShowProgramming] = useState(false);
  const [showMedia, setShowMedia ] = useState(false);
  const [showEcomm, setShowEcomm ] = useState(false);
  const [showEcommExp, setShowEcommExp] = useState(false);
  const [showEntertain, setShowEntertain] = useState(false);
  
  const skills__controller = {
    prog: setShowProgramming,
    media: setShowMedia,
    ecomm: setShowEcomm,
  }

  const jobs__controller = {
    ecommExp: setShowEcommExp,
    entertain: setShowEntertain
  }

  return (
    <div className="App">  
      <Route exact path='/'>
        <NotifBanner />
        <Welcome />
      </Route>

      <Route exact path='/about'>
        <Header />
      </Route>

      <Route exact path="/about">
        <SkillsHeader props={skills__controller} />
      </Route>

      <Popup trigger={showProgramming} setTrigger={setShowProgramming} >
        <Skills__Programming />
      </Popup>

      <Popup trigger={showMedia} setTrigger={setShowMedia}>
          <Skills__Media />
      </Popup>      
      
      <Popup trigger={showEcomm} setTrigger={setShowEcomm}>
          <Skills__Ecomm />
      </Popup>


      <Route exact path='/about'>
        <WorkExp />
      </Route>
      
      <Route exact path='/about/epic'>
        <Viewmore__banner />
        <EpicComp__viewmore />
      </Route>
      

      <Route exact path='/about/visa'>
        <Viewmore__banner />
        <VisaComp__viewmore />
      </Route>

      <Route exact path ='/about'>
        <JobsHeader props={jobs__controller}/>
      </Route>

      <Popup trigger={showEcommExp} setTrigger={setShowEcommExp}>
        <EcommJobs />
      </Popup>
      
      <Popup trigger={showEntertain} setTrigger={setShowEntertain}>
        <EntertainJobs />
      </Popup>

      <Route exact path='/about'>
        <Education />
      </Route>

      <Route exact path='/about'>
        <Footer />
      </Route>

      <Route exact path='/about'>
        <iframe 
          src="https://open.spotify.com/embed/playlist/6a6WHsODpZRCD4lUwyYVdN" 
          title='AvantGov HQ Playlist'
          width="100%" 
          height="350px" 
          frameborder="0" 
          allowtransparency="true" 
          allow="encrypted-media"
          className='Footer__spotify'>
        </iframe>
      </Route>

      <Route exact path='/about'>
        <TM />
      </Route>

    </div>
  );
}

export default App;
