import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import TrademarkComponent from '../components/TrademarkComponent';

export class TrademarkPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <TrademarkComponent />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default TrademarkPage;
