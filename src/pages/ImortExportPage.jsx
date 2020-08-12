import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import ImportExportComponent from '../components/ImportExportComponent';

export class ImortExportPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <ImportExportComponent />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default ImortExportPage;
