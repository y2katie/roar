import React from "react"
import {Route, Switch} from "react-router-dom"
import Jumbotron from "./components/Jumbotron"
import { MotionLayoutProvider } from 'react-motion-layout';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route path='/' exact component={Jumbotron} />

      </Switch>
      </div>
    );
  }

}

export default App;
