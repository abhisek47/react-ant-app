import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import PfComponent from '../components/PfComponent';

export class PfPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <PfComponent />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default PfPage;
