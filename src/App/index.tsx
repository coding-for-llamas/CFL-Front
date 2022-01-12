/* eslint-disable react/destructuring-assignment */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { Dispatch, PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFourOhFour from './404';
import NavBar from '../components/Navbar';
import DefaultHome from '../containers/Homepage';
import Footer from '../components/Footer';
import DefaultContact from '../containers/Contact';
import mapStoreToProps, { Auth } from '../redux/mapStoreToProps';

export interface AppProps {
  dispatch: Dispatch<unknown>;
  auth: Auth;
}

export class App extends PureComponent<AppProps> {
  static defaultProps = {
    dispatch: /* istanbul ignore next */(): void => { },
    auth: {
      isAuthenticated: false, token: '', error: '', email: '', user: { userType: '' },
    },
  };

  render(): JSX.Element {
    return (
      <React.StrictMode>
        <div id="App" className="App Site">
        <Router>
          <NavBar />
          <>
            <Switch>
              <Route exact path="/" component={DefaultHome} />
              {/* <Route path="/about" component={DefaultAbout} />
              <Route path="/work" component={DefaultWork} /> */}
              <Route path="/contact" component={DefaultContact} />
              <Route component={AppFourOhFour} />
            </Switch>
          </>
          <Footer />
        </Router>
      </div>
      </React.StrictMode>
    );
  }
}

export default connect(mapStoreToProps, null)(App);
