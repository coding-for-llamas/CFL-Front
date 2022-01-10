import 'core-js/stable';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import AppTemplate from './components/App-Main';
import DefaultAbout from './containers/About/About';
import DefaultWork from './containers/Work/Work';
import DefaultContact from './containers/Contact/Contact';
import DefaultCafeLatte from './containers/CafeLatte/CafeLatte';
import DefaultColourMePhoney from './containers/ColourMePhoney/ColourMePhoney';
import DefaultAccessCropping from './containers/AccessCropping/AccessCropping';
import FourOhFour from './containers/404';

export class App extends Component {
  render(): JSX.Element {
    return (
      <div id="App" className="App Site">
        <Router>
          <Navbar />
          <div className="siteContent">
            <Switch>
              <Route exact path="/" component={AppTemplate} />
              <Route path="/about" component={DefaultAbout} />
              <Route path="/work" component={DefaultWork} />
              <Route path="/contact" component={DefaultContact} />
              <Route path="/cafe-latte" component={DefaultCafeLatte} />
              <Route path="/colour-me-phoney" component={DefaultColourMePhoney} />
              <Route path="/access-cropping" component={DefaultAccessCropping} />
              <Route component={FourOhFour} />
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;
