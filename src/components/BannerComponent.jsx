import React from 'react';
import { Layout, Typography, Button, Row } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import { useMedia } from 'react-media';
import BannerBg from '../assets/banner2.jpg';

const BannerComponent = () => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 767px)',
    medium: '(min-width: 768px) and (max-width: 1199px)',
    large: '(min-width: 1200px)',
  };
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  const { Content } = Layout;
  const { Title, Paragraph } = Typography;
  const contentStyle = {
    width: '100%',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#111',
    textAlign: 'center',
  };
  const svgPattern = {
    // backgroundColor: '#f0f5ff',
    width: '100%',
    backgroundSize: 'cover',
    backgroundImage: `url(${BannerBg})`,
    backgroundPosition: 'center center',
  };

  return (
    <React.Fragment>
      <Layout className='layout' style={svgPattern}>
        <Content style={{ padding: matches.large ? '10px 50px' : '5px 30px' }}>
          <Typography style={contentStyle}>
            <Title>We Are Helping Startup To Grow Their Business</Title>
            <Paragraph
              strong
              style={{
                width: matches.large ? '70%' : '100%',
                margin: '0 auto',
                fontSize: '16px',
                fontFamily: 'Source Sans Pro',
              }}>
              we have over 8+ years of corporate and consulting experience with
              top firms. Our network includes experienced Chartered Accountants,
              Company Secretaries, Lawyers, Cost Accountants and many more.
            </Paragraph>
            <Row
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '32px',
                justifyContent: 'space-between',
              }}>
              <Button type='primary' size='large' style={{ margin: '0 14px' }}>
                Get started
              </Button>
              <Button
                type='primary'
                icon={<PhoneOutlined rotate={90} />}
                size='large'
              />
            </Row>
          </Typography>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default BannerComponent;
