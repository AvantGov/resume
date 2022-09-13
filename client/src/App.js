// * DEPENDS.
import React, { useState } from 'react';
import { Route } from 'react-router-dom';

// * MODALS 
import Popup from './Components/framework/popup'
 
// * COMPS
  // * frame
  import Footer from './Components/Footer';
  import TM from './Components/TM';


  // * ~/
  import Header from './Components/Home/Header';
  import SkillsList from './Components/Home/SkillList';
  import Experience from './Components/Home/Experience';

  // * /skills
  import ListFrame from "./Components/SubDir/ListFrame";

  // * /skills/{item} ??


// * CSS 
import './CSS/App.css';

function App() {


  return (
    <div className="App">  
      <Route exact path='/'>
        <Header />
        <SkillsList />
        <Experience />
      </Route>
      <Route path="/skill">
        <ListFrame />
      </Route>
      <Route path="/">
        <Footer />
        <TM />
      </Route>


    </div>
  );
}

export default App;

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

        {/* // ! pop ups */}
      {/* <Popup trigger={showEcommExp} setTrigger={setShowEcommExp}>
        <EcommJobs />
      </Popup>
      
      <Popup trigger={showEntertain} setTrigger={setShowEntertain}>
        <EntertainJobs />
      </Popup> */}
      {/* // ! */}