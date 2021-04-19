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

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">  
      <Route exact path='/'>
        <Welcome />
      </Route>

      <Route exact path='/about'>
        <Header />
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

      <Route exact path="/about">
        <SkillsHeader />
      </Route>

      <div className='App__skillsViewer'>
        <Route exact path='/about/programming'>
          <Skills__Programming />
        </Route>
        
        <Route exact path='/about/media'>
          <Skills__Media />
        </Route>
        
        <Route exact path='/about/ecomm'>
          <Skills__Ecomm />
        </Route>
      </div>
    </div>
  );
}

export default App;
