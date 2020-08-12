import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import PfComponent from '../components/PfComponent';
import CollapseComponent from '../components/CollapseComponent';

export class PfPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <PfComponent />
        <CollapseComponent heading='Questions Related Provident Fund' />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default PfPage;
