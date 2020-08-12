import React, { Component } from 'react';
import TdsComponent from '../components/TdsComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

export class TdsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <TdsComponent />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default TdsPage;
