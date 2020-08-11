import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import GstPage from '../pages/GstPage';
import GstReturnPage from '../pages/GstReturnPage';
import NotFoundPage from '../pages/NotFoundPage';

const Routes = () => {
  return (
    <React.Fragment>
      <Router basename='/'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/gst' component={GstPage} />
          <Route exact path='/gst-return' component={GstReturnPage} />
          <Route exact path='*' component={NotFoundPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default Routes;
