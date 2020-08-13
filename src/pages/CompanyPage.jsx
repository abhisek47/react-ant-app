import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import CompanyComponent from '../components/CompanyComponent';

export class ItrOnePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <CompanyComponent />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default ItrOnePage;
