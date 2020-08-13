import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import ItrSixComponent from '../components/ItrSixComponent';

export class ItrOnePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <ItrSixComponent />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default ItrOnePage;
