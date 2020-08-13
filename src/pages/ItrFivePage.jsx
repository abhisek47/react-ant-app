import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import ItrFiveComponent from '../components/ItrFiveComponent';

export class ItrOnePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <ItrFiveComponent />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default ItrOnePage;
