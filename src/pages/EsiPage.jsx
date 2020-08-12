import React, { Component } from 'react';
import EsiComponent from '../components/EsiComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

export class EsiPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <EsiComponent />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default EsiPage;
