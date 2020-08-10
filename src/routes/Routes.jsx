import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PageNotFound from '../components/PageNotFound';
import GstPage from '../pages/GstPage';

const Routes = () => {
  return (
    <React.Fragment>
      <Router basename='/'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/gst' component={GstPage} />
          <Route exact path='*' component={PageNotFound} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default Routes;
