import './App.css';

import Header from './Components/Header';
import WorkExp from "./Components/WorkExp";
import EpicComp__viewmore from './Components/EpicComp__viewmore';
import VisaComp__viewmore from './Components/VisaComp__viewmore';
import Viewmore__banner from './Components/Viewmore__banner';
import Skills__Ecomm from './Components/Skills__Ecomm';
import Skills__Media from './Components/Skills__Media';
import Skills__Programming from './Components/Skills__Programming';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">    
      <Route exact path='/'>
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

      <Skills__Ecomm />
      <Skills__Media />
      <Skills__Programming />
    </div>
  );
}

export default App;
