import React from "react"
import { Route, Switch }  from "react-router-dom"
import Frames from "./components/Frames"
import Carousel from "./components/Carousel"
import Faq from "./components/Faq"
import Results from "./components/Results"





import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={Frames} />
          <Route path='/carousel' component={Carousel} />
          <Route path='/faq' component={Faq} />
          <Route path='/results' component={Results} />


        </Switch>
      </div>
    );
  }

}

export default App;
