import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import BannerComponent from '../components/BannerComponent';
import AboutComponent from '../components/AboutComponent';
import PopularEntities from '../components/PopularEntities';
import SupportComponent from '../components/SupportComponent';

const HomePage = () => {
  return (
    <div>
      <HeaderComponent />
      <BannerComponent />
      <AboutComponent />
      <PopularEntities />
      <SupportComponent />
    </div>
  );
};

export default HomePage;
