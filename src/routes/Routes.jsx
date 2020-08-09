import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const Routes = () => {
  return (
    <React.Fragment>
      <Router>
        <Route exact path='/' component={HomePage} />
      </Router>
    </React.Fragment>
  );
};

export default Routes;
