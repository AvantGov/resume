import './App.css';

import Header from './Components/Header';
import WorkExp from "./Components/WorkExp";
import EpicComp__viewmore from './Components/EpicComp__viewmore';
import VisaComp__viewmore from './Components/VisaComp__viewmore';
import Viewmore__banner from './Components/Viewmore__banner';
import Skills__ecomm from './Components/Skills__ecomm';
import Skills__media from './Components/Skills__media';
import Skills__programming from './Components/Skills__programming';

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

      {/* <Skills__ecomm /> */}
      <Skills__media />
      {/* <Skills__programming /> */}
    </div>
  );
}

export default App;
