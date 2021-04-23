import './App.css';

import Header from './Components/Header';
import WorkExp from "./Components/WorkExp";
import EpicComp__viewmore from './Components/EpicComp__viewmore';
import VisaComp__viewmore from './Components/VisaComp__viewmore';
import Viewmore__banner from './Components/Viewmore__banner';
import SkillsHeader from './Components/SkillsHeader';
import Skills__Ecomm from './Components/Skills__Ecomm';
import Skills__Media from './Components/Skills__Media';
import Skills__Programming from './Components/Skills__Programming';
import Welcome from './Components/Welcome';

import Popup from './Components/framework/popup'

import { Route } from 'react-router-dom';
import { useState } from 'react'

function App() {
  
  const [showProgramming, setShowProgramming] = useState(false);
  const [showMedia, setShowMedia ] = useState(false);
  const [showEcomm, setShowEcomm ] = useState(false);
  
  const skills__controller = {
    prog: setShowProgramming,
    media: setShowMedia,
    ecomm: setShowEcomm
  }

  return (
    <div className="App">  
      <Route exact path='/'>
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

    </div>
  );
}

export default App;
