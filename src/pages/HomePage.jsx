import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import AboutComponent from '../components/AboutComponent';
import PopularEntities from '../components/PopularEntities';
import SupportComponent from '../components/SupportComponent';
import QuotesComponents from '../components/QuotesComponents';
import FooterComponent from '../components/FooterComponent';
import CollapseComponent from '../components/CollapseComponent';
import BannerComponent from '../components/BannerComponent';

class HomePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <HeaderComponent />
        <BannerComponent />
        <AboutComponent />
        <PopularEntities />
        <QuotesComponents />
        <SupportComponent />
        <CollapseComponent heading='Frequently Asked Questions' />
        <FooterComponent />
      </div>
    );
  }
}

export default HomePage;
