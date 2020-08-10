import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import BannerComponent from '../components/BannerComponent';
import AboutComponent from '../components/AboutComponent';
import PopularEntities from '../components/PopularEntities';
import SupportComponent from '../components/SupportComponent';
import QuotesComponents from '../components/QuotesComponents';
import FooterComponent from '../components/FooterComponent';
import CollapseComponent from '../components/CollapseComponent';
// import { BackTop } from 'antd';

// const style = {
//   height: 40,
//   width: 40,
//   lineHeight: '40px',
//   borderRadius: 4,
//   backgroundColor: '#1088e9',
//   color: '#fff',
//   position: 'relative',
//   right: '2px',
//   bottom: '50px',
//   textAlign: 'center',
//   fontSize: 14,
// };
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
        <CollapseComponent />
        <FooterComponent />
        {/* <BackTop>
          <div style={style}>UP</div>
        </BackTop> */}
      </div>
    );
  }
}

export default HomePage;
