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
  import LF_return from "./Components/SubDir/LF_return";

// * scroll to top 
import ScrollToTop from './Components/framework/ScrollToTop';


// * CSS 
import './CSS/App.css';

function App() {


  return (
    <div className="App">  
      <ScrollToTop />
      <Route exact path='/'>
        <Header />
        <SkillsList />
        <Experience />
      </Route>
      <Route path="/skill">
        <ListFrame />
        <LF_return />
      </Route>
      <Route path="/">
        <Footer />
        <TM />
      </Route>


    </div>
  );
}

export default App;

