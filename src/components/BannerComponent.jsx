import React from 'react';
import { Layout, Typography, Button, Row } from 'antd';
import { useMedia } from 'react-media';
import ProgressiveImage from 'react-progressive-image-loading';
import wideOne from '../assets/wideOne.jpg';
import wideOneTiny from '../assets/wideOneTiny.jpg';

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
    textAlign: 'center',
  };

  return (
    <React.Fragment>
      <Layout className='layout'>
        <ProgressiveImage
          preview={wideOneTiny}
          src={wideOne}
          render={(src, style) => (
            <div
              style={Object.assign(style, {
                backgroundImage: `url(${src})`,
                height: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center middle',
                backgroundSize: 'cover',
              })}>
              <Content
                style={{
                  padding: matches.large ? '10px 50px' : '5px 30px',
                  width: matches.large ? '80%' : '100%',
                  margin: '0 auto',
                }}>
                <Typography style={contentStyle}>
                  <Title style={{ color: '#fff' }}>
                    We Are Helping Startup To Grow Their Business
                  </Title>
                  <Paragraph
                    strong
                    style={{
                      margin: '0 auto',
                      fontSize: '16px',
                      fontFamily: 'Source Sans Pro',
                      color: '#fff',
                    }}>
                    we have over 8+ years of corporate and consulting experience
                    with top firms. Our network includes experienced Chartered
                    Accountants, Company Secretaries, Lawyers, Cost Accountants
                    and many more.
                  </Paragraph>
                  <Row
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '32px',
                      justifyContent: 'space-between',
                    }}>
                    <Button size='large' style={{ margin: '0 14px' }}>
                      Get started
                    </Button>
                  </Row>
                </Typography>
              </Content>
            </div>
          )}></ProgressiveImage>
      </Layout>
    </React.Fragment>
  );
};

export default BannerComponent;
