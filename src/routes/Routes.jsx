import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PageNotFound from '../components/PageNotFound';

const Routes = () => {
  return (
    <React.Fragment>
      <Router>
        <Route exact path='/' component={HomePage} />
        <Route exact path='*' component={PageNotFound} />
      </Router>
    </React.Fragment>
  );
};

export default Routes;
