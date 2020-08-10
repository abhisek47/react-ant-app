import React from 'react';
import { useMedia } from 'react-media';
import { Layout, Typography, Row, Col } from 'antd';
import director from '../assets/chief@2x.png';

const QuotesComponents = () => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 767px)',
    medium: '(min-width: 768px) and (max-width: 1199px)',
    large: '(min-width: 1200px)',
  };
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  const { Title, Paragraph, Text } = Typography;
  const { Content } = Layout;
  return (
    <React.Fragment>
      <Layout className='layout' style={{ background: '#f0f5ff' }}>
        <Content
          style={{
            padding: matches.large ? '10px 50px' : '5px 30px',
            textAlign: matches.small ? 'center' : 'left',
            margin: '18px 0',
            fontFamily: 'Source Sans Pro',
          }}>
          <Row
            gutter={16}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Col span={matches.small ? 24 : 16}>
              <Typography>
                <Title
                  style={{
                    fontFamily: 'Alegreya Sans',
                    fontWeight: '500',
                  }}>
                  PAN India Services
                </Title>
                <Paragraph>
                  we have over 8+ years of corporate and consulting experience
                  with top firms. Our network includes experienced Chartered
                  Accountants, Company Secretaries, Lawyers, Cost Accountants
                  and many more. We help in startup compliance and assists in
                  ROC filing, GST filing, incometax filing, and assist in
                  geeting various certificates like IPR, fssai, IEC etc . We
                  help and assist client in legal compliances - “ give a-the
                  burden of compliance to us for ease of focusing on business ”
                </Paragraph>
                <Paragraph strong style={{ marginTop: '32px' }}>
                  Uday Choudhary
                </Paragraph>
                <Text>CEO of Clientfilingindia</Text>
              </Typography>
            </Col>
            <Col span={matches.small ? 24 : 7}>
              <img
                src={director}
                alt=''
                style={{ width: matches.large ? '85%' : '95%' }}
              />
            </Col>
          </Row>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default QuotesComponents;
