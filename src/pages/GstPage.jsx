import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import GstComponent from '../components/GstComponent';
import FooterComponent from '../components/FooterComponent';
import CollapseComponent from '../components/CollapseComponent';

export class GstPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <GstComponent />
        <CollapseComponent heading='Questions Related GST Registration' />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default GstPage;
