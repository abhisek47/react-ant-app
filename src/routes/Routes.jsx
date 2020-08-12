import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import GstPage from '../pages/GstPage';
import GstReturnPage from '../pages/GstReturnPage';
import NotFoundPage from '../pages/NotFoundPage';
import PfPage from '../pages/PfPage';
import EsiPage from '../pages/EsiPage';
import EsiReturnPage from '../pages/EsiReturnPage';
import IsoPage from '../pages/IsoPage';
import TdsPage from '../pages/TdsPage';
import ImportExportPage from '../pages/ImortExportPage';
import ItrOnePage from '../pages/ItrOnePage';

const Routes = () => {
  return (
    <React.Fragment>
      <Router basename='/'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/gst' component={GstPage} />
          <Route exact path='/gst-return' component={GstReturnPage} />
          <Route exact path='/provident-fund' component={PfPage} />
          <Route exact path='/employees-state-insurance' component={EsiPage} />
          <Route
            exact
            path='/employees-state-insurance-return'
            component={EsiReturnPage}
          />
          <Route exact path='/iso' component={IsoPage} />
          <Route exact path='/tax-deducted-at-source' component={TdsPage} />
          <Route
            exact
            path='/import-export-code'
            component={ImportExportPage}
          />
          <Route exact path='/income-tax-return-1' component={ItrOnePage} />
          <Route exact path='*' component={NotFoundPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default Routes;
