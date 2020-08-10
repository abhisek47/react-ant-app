import React from 'react';
import { useMedia } from 'react-media';
import { Layout, Typography, Card, Row, Col } from 'antd';
import {
  HeartFilled,
  MessageFilled,
  SafetyCertificateFilled,
} from '@ant-design/icons';

const SupportComponent = () => {
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
            textAlign: matches.small ? 'center' : 'left',
            margin: '18px 0',
            fontFamily: 'Source Sans Pro',
          }}>
          <Row gutter={16}>
            <Col span={matches.small ? 24 : 8}>
              <Card
                style={{
                  width: '100%',
                  marginTop: '14px',
                  minHeight: '170px',
                }}>
                <HeartFilled
                  style={{
                    fontSize: '36px',
                    color: '#eb2f96',
                    marginBottom: '18px',
                  }}
                />
                <Typography>
                  <Title level={4}>Vibrant Team</Title>
                  <Paragraph>
                    A talented workforce that works in collaboration with a
                    network of over 6000+ Professionals.
                  </Paragraph>
                </Typography>
              </Card>
            </Col>
            <Col span={matches.small ? 24 : 8}>
              <Card
                style={{
                  width: '100%',
                  marginTop: '14px',
                  minHeight: '170px',
                }}>
                <MessageFilled
                  style={{
                    fontSize: '36px',
                    color: '#1890ff',
                    marginBottom: '18px',
                  }}
                />
                <Typography>
                  <Title level={4}>24/7 Support</Title>
                  <Paragraph>
                    Get support through phone, email, mobile app or live chat -
                    24/7, 365 days.
                  </Paragraph>
                </Typography>
              </Card>
            </Col>
            <Col span={matches.small ? 24 : 8}>
              <Card
                style={{
                  width: '100%',
                  marginTop: '14px',
                  minHeight: '170px',
                }}>
                <SafetyCertificateFilled
                  style={{
                    fontSize: '36px',
                    color: '#52c41a',
                    marginBottom: '18px',
                  }}
                />

                <Typography>
                  <Title level={4}>Secure Payment</Title>
                  <Paragraph>
                    Easily pay online with EMI payments, credit or debit card,
                    net banking, PayPal and more.
                  </Paragraph>
                </Typography>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default SupportComponent;
