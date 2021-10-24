import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { Component, Dispatch } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/Nav/Navbar';
import AppTemplate from './components/App-Main';
import DefaultAbout from './containers/About/About';
import DefaultWork from './containers/Work/Work';
import DefaultContact from './containers/Contact/Contact';
import DefaultCafeLatte from './containers/CafeLatte/CafeLatte';
import FourOhFour from './containers/404';
import getImages from './actions/imageActions';
import mapStoreToProps, { Iimage } from './redux/mapStoreToProps';

export interface AppProps {
  dispatch: Dispatch<unknown>;
  images: Iimage[];
}

export class App extends Component<AppProps> {
  static defaultProps = {
    dispatch: (): void => { },
    images: [],
  };

  async componentDidMount(): Promise<void> {
    const { dispatch, images } = this.props;
    if (images.length === 0) dispatch(getImages());
  }

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
              <Route component={FourOhFour} />
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default connect(mapStoreToProps, null)(App);
