import React from "react"
import { Route, Switch }  from "react-router-dom"
import Frames from "./components/Frames"
import Carousel from "./components/Carousel"
import Copy from "./components/Copy"



import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={Frames} />
          <Route path='/carousel' component={Carousel} />
        </Switch>
      </div>
    );
  }

}


export default App;

// <Route path='/' exact component={Frames} />
// <Route path='/carousel' component={Carousel} />
