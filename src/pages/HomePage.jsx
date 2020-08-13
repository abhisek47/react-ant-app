import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import AboutComponent from '../components/AboutComponent';
import PopularEntities from '../components/PopularEntities';
import SupportComponent from '../components/SupportComponent';
import QuotesComponents from '../components/QuotesComponents';
import FooterComponent from '../components/FooterComponent';
import CollapseComponent from '../components/CollapseComponent';
import MainComponent from '../components/MainComponent';

class HomePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <HeaderComponent />
        <MainComponent />
        <SupportComponent />
        <AboutComponent />
        <PopularEntities />
        <QuotesComponents />
        <CollapseComponent heading='Frequently Asked Questions' />
        <FooterComponent />
      </div>
    );
  }
}

export default HomePage;
