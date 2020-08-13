import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import ItrTwoComponent from '../components/ItrTwoComponent';

export class ItrTwoPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <ItrTwoComponent />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default ItrTwoPage;
