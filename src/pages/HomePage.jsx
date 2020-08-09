import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import BannerComponent from '../components/BannerComponent';
import AboutComponent from '../components/AboutComponent';

const HomePage = () => {
  return (
    <div>
      <HeaderComponent />
      <BannerComponent />
      <AboutComponent />
    </div>
  );
};

export default HomePage;
