import './App.css';

import Header from './Components/Header';
import WorkExp from "./Components/WorkExp";
import EpicComp__viewmore from './Components/EpicComp__viewmore';
import VisaComp__viewmore from './Components/VisaComp__viewmore';
// import viewmore_banner from './Components/viewmore_banner';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">    
      <Route exact path='/'>
        <Header />
        <WorkExp />
      </Route>
      
      <Route exact path='/about/epic'>
        {/* <viewmore_banner /> */}
        <EpicComp__viewmore />
      </Route>
      
      <Route exact path='/about/visa'>
        {/* <viewmore_banner /> */}
        <VisaComp__viewmore />
      </Route>
    </div>
  );
}

export default App;
