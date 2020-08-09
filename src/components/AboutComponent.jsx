import React from 'react';
import { useMedia } from 'react-media';
import { Layout, Typography, Row, Space, Card } from 'antd';

const AboutComponent = () => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 767px)',
    medium: '(min-width: 768px) and (max-width: 1199px)',
    large: '(min-width: 1200px)',
  };
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  const { Title, Paragraph } = Typography;
  const { Content } = Layout;
  return (
    <React.Fragment>
      <Layout className='layout' style={{ background: '#fff' }}>
        <Content
          style={{
            padding: matches.large ? '10px 50px' : '5px 30px',
            display: 'flex',
            flexDirection: matches.small ? 'column' : 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          <Card
            title='Company Established'
            style={{ width: '100%', margin: '10px' }}>
            <p>Card content</p>
          </Card>
          <Card title='Staff Members' style={{ width: '100%', margin: '10px' }}>
            <p>Card content</p>
          </Card>
          <Card
            title='Offices Available'
            style={{ width: '100%', margin: '10px' }}>
            <p>Card content</p>
          </Card>
          <Card
            title='Happy Clientele'
            style={{ width: '100%', margin: '10px' }}>
            <p>Card content</p>
          </Card>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default AboutComponent;
