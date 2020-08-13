import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import ItrThreeComponent from '../components/ItrThreeComponent';

export class ItrThreePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <ItrThreeComponent />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default ItrThreePage;
