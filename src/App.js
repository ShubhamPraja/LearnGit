
import './App.css';
import Ask from './Component/Ask.jsx'
import Job from './Component/Job.jsx'
import Top from './Component/Top.js'
import Show from './Component/Show.js'
import NevBar from './Component/NevBar.jsx'
import { Switch, Route } from 'react-router-dom';
import Design from './Component/Design.jsx'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/top" component={Top}></Route>
        <Route exact path="/ask" component={Ask}></Route>
        <Route exact path="/show" component={Show}></Route>
        <Route exact path="/job" component={Job}></Route>
      </Switch>
      <Design></Design>
    </>
  );
}

export default App;
