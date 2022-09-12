// * DEPENDS.
import React, { useState } from 'react';
import { Route } from 'react-router-dom';

// * MODALS 
import Popup from './Components/framework/popup'
 
// * COMPS
  // * /~
  import Welcome from './Components/Welcome';

  // * /home
  import Header from './Components/Home/Header';
import Footer from './Components/Footer';
import TM from './Components/TM';

// * CSS 
import './CSS/App.css';

function App() {

  // ! data control
  // const [showProgramming, setShowProgramming] = useState(false);
  // const [showMedia, setShowMedia ] = useState(false);
  // const [showEcomm, setShowEcomm ] = useState(false);
  // const [showEcommExp, setShowEcommExp] = useState(false);
  // const [showEntertain, setShowEntertain] = useState(false);
  
  // const skills__controller = {
  //   prog: setShowProgramming,
  //   media: setShowMedia,
  //   ecomm: setShowEcomm,
  // }

  // const jobs__controller = {
  //   ecommExp: setShowEcommExp,
  //   entertain: setShowEntertain
  // }
  // !

  return (
    <div className="App">  
      {/* <Route exact path='/'>
        <Welcome />
      </Route> */}

      <Route exact path='/'>
        <Header />
      </Route>

      <Route path="/">
        <Footer />
        <TM />
      </Route>

      {/* // ! pop ups */}
      {/* <Popup trigger={showProgramming} setTrigger={setShowProgramming} >
        <Skills__Programming />
      </Popup>

      <Popup trigger={showMedia} setTrigger={setShowMedia}>
          <Skills__Media />
      </Popup>      
      
      <Popup trigger={showEcomm} setTrigger={setShowEcomm}>
          <Skills__Ecomm />
      </Popup> */}
      {/* // ! */}

      {/* // ! pop ups */}
      {/* <Popup trigger={showEcommExp} setTrigger={setShowEcommExp}>
        <EcommJobs />
      </Popup>
      
      <Popup trigger={showEntertain} setTrigger={setShowEntertain}>
        <EntertainJobs />
      </Popup> */}
      {/* // ! */}

    </div>
  );
}

export default App;
