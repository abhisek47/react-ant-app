import React from 'react';
import { Layout, Typography, Button, Row, Col } from 'antd';
import { useMedia } from 'react-media';
import wideOne from '../assets/wideOne.jpg';
import wideTwo from '../assets/wideTwo.jpg';
import tallOne from '../assets/tallOne.jpg';
import tallTwo from '../assets/tallTwo.jpg';
import tallThree from '../assets/tallThree.jpg';
import tallFour from '../assets/tallFour.jpg';
import wideOneTiny from '../assets/wideOneTiny.jpg';
import wideTwoTiny from '../assets/wideTwoTiny.jpg';
import tallOneTiny from '../assets/tallOneTiny.jpg';
import tallTwoTiny from '../assets/tallTwoTiny.jpg';
import tallThreeTiny from '../assets/tallThreeTiny.jpg';
import tallFourTiny from '../assets/tallFourTiny.jpg';
import ProgressiveImage from 'react-progressive-image-loading';
import { Link } from 'react-router-dom';

const MainComponent = () => {
  const banner = [
    {
      id: 1,
      title: 'Startup Company Registration',
      img: `${wideOne}`,
      position: 'center top',
      span: 12,
      tiny: `${wideOneTiny}`,
      link: '/private-limited-company',
    },
    {
      id: 2,
      title: 'Property Registration',
      img: `${tallOne}`,
      position: 'center center',
      span: 6,
      tiny: `${tallOneTiny}`,
      link: '/',
    },
    {
      id: 3,
      title: 'Income Tax Return Filing',
      img: `${tallTwo}`,
      position: 'center center',
      span: 6,
      tiny: `${tallTwoTiny}`,
      link: '/income-tax-return-1',
    },
    {
      id: 4,
      title: 'Annual Compliances',
      img: `${tallThree}`,
      position: 'center center',
      span: 6,
      tiny: `${tallThreeTiny}`,
      link: '/provident-fund',
    },
    {
      id: 5,
      title: 'Goods and Services Tax',
      img: `${tallFour}`,
      position: 'center top',
      span: 6,
      tiny: `${tallFourTiny}`,
      link: '/gst',
    },
    {
      id: 6,
      title: 'Resources',
      img: `${wideTwo}`,
      position: 'center center',
      span: 12,
      tiny: `${wideTwoTiny}`,
      link: '',
    },
  ];
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 767px)',
    medium: '(min-width: 768px) and (max-width: 1199px)',
    large: '(min-width: 1200px)',
  };
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  const { Content } = Layout;
  const { Title } = Typography;
  const svgPattern = {
    width: '100%',
    backgroundColor: '#f0f5ff',
  };
  return (
    <React.Fragment>
      <Layout className='layout' style={svgPattern}>
        <Content
          style={{
            padding: matches.large ? '10px 50px' : '5px 30px',
            width: matches.large ? '80%' : '100%',
            margin: '0 auto',
            fontFamily: 'Source Sans Pro',
            textShadow: '10px 10px 30px rgba(0,0,0,.1)',
          }}>
          <Row gutter={24} style={{ margin: '14px 0' }}>
            {banner.map((bg) => (
              <Col span={matches.small ? 24 : bg.span} key={bg.id}>
                <ProgressiveImage
                  preview={bg.tiny}
                  src={bg.img}
                  transitionTime={5}
                  transitionFunction='ease'
                  render={(src, style) => (
                    <div
                      style={Object.assign(style, {
                        backgroundImage: `url(${src})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        borderRadius: '8px',
                        marginBottom: `24px`,
                        border: 'none',
                        boxShadow: '5px 5px 10px rgba(0,0,0,.1)',
                      })}>
                      <div style={{ padding: '24px' }}>
                        <Title
                          level={3}
                          style={{ color: '#fff', marginBottom: '24px' }}>
                          {bg.title}
                        </Title>
                        <Link to={bg.link}>
                          <Button value='large'>Get Started</Button>
                        </Link>
                      </div>
                    </div>
                  )}
                />
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default MainComponent;
