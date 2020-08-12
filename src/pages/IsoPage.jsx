import React, { Component } from 'react';
import IsoComponent from '../components/IsoComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

export class IsoPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <IsoComponent />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default IsoPage;
