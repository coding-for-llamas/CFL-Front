import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Navbar from './components/Nav/Navbar';
import AppTemplate from './components/App-Main';
import DefaultAbout from './containers/About/About';
import DefaultWork from './containers/Work/Work';
import DefaultContact from './containers/Contact/Contact';
import FourOhFour from './containers/404';
import getImages from './actions/imageActions';
import mapStoreToProps from './redux/mapStoreToProps';

export class App extends Component {
  async componentDidMount() {
    const { dispatch, images } = this.props;
    if (images.length === 0)dispatch(getImages());
  }

  render() {
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
              <Route component={FourOhFour} />
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  images: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape({})), PropTypes.shape({})]),
};
App.defaultProps = { images: [] };

export default connect(mapStoreToProps, null)(App);
