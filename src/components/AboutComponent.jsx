import React from 'react';
import { useMedia } from 'react-media';
import { Layout, Typography, Card, Row, Col } from 'antd';

const AboutComponent = () => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 767px)',
    medium: '(min-width: 768px) and (max-width: 1199px)',
    large: '(min-width: 1200px)',
  };
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  const { Title } = Typography;
  const { Content } = Layout;
  return (
    <React.Fragment>
      <Layout className='layout' style={{ background: '#fff' }}>
        <Content
          style={{
            padding: matches.large ? '10px 50px' : '5px 30px',
            textAlign: matches.large ? 'left' : 'center',
            fontFamily: 'Source Sans Pro',
          }}>
          <Row gutter={16}>
            <Col span={matches.small ? 24 : 6}>
              <Card
                title='Company Established'
                style={{ width: '100%', marginTop: '14px' }}>
                <Typography>
                  <Title level={2}>2013</Title>
                </Typography>
              </Card>
            </Col>
            <Col span={matches.small ? 24 : 6}>
              <Card
                title='Staff Members'
                style={{ width: '100%', marginTop: '14px' }}>
                <Typography>
                  <Title level={2}>80+</Title>
                </Typography>
              </Card>
            </Col>
            <Col span={matches.small ? 24 : 6}>
              <Card
                title='Offices Available'
                style={{ width: '100%', marginTop: '14px' }}>
                <Typography>
                  <Title level={2}>06</Title>
                </Typography>
              </Card>
            </Col>
            <Col span={matches.small ? 24 : 6}>
              <Card
                title='Happy Clientele'
                style={{ width: '100%', marginTop: '14px' }}>
                <Typography>
                  <Title level={2}>4500</Title>
                </Typography>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default AboutComponent;
