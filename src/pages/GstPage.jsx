import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import TabComponent from '../components/TabComponent';

class GstPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <TabComponent />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default GstPage;
