import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import EsiReturnComponent from '../components/EsiReturnComponent';

export class EsiReturnPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <EsiReturnComponent />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default EsiReturnPage;
