import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {HashRouter, Route,Switch,Redirect} from 'react-router-dom';
import Cars from './components/pages/cars';
import Car from './components/pages/car';
import ErrorPage from './components/pages/error404';
import {GlobalStyles} from './styledComponents/main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <GlobalStyles />
         <HashRouter>
            <Switch>
              <Route exact path='/' component={Cars} />
              <Route path='/car/:stockNumber' component={Car} />
              <Redirect from='/cars' to='/' />
              <Redirect from='/Cars' to='/' />
              <Route component={ErrorPage} />
            </Switch>
          </HashRouter>
      </div>
    );
  }
}

App.contextTypes = {
  store : PropTypes.object
}

export default App;
