import React, { Component } from 'react';
import GstReturnComponent from '../components/GetReturnComponent';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';
import CollapseComponent from '../components/CollapseComponent';

export class GstReturnPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <GstReturnComponent />
        <CollapseComponent heading='Questions Related GST Return Filing' />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default GstReturnPage;
