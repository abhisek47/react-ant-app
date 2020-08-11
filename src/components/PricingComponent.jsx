import React from 'react';
import { Layout, Typography, Card, Row, Col, Button, List } from 'antd';
import { useMedia } from 'react-media';
import { Link } from 'react-router-dom';

const PricingComponent = () => {
  const basic = [
    '3 months GST return filing',
    'Unlimited Invoices',
    'Unlimited Purchase Invoices',
    'Sales invoices',
    'ITR reconciliation,filing',
    'Filing of gst1 and gstr3b',
    'Importing data of any softwares',
    'Cloud backup for 10 years',
  ];
  const standard = [
    '6 month GST return filing',
    'Unlimited Invoices',
    'Unlimited Purchase Invoices',
    'Sales invoices',
    'ITR reconciliation,filing',
    'Filing of gst1 and gstr3b',
    'Importing data of any softwares',
    'Cloud backup for 10 years',
  ];
  const premium = [
    '12 month GST return filing',
    'Unlimited Invoices',
    'Unlimited Purchase Invoices',
    'Sales invoices',
    'ITR reconciliation,filing',
    'Filing of gst1 and gstr3b',
    'Importing data of any softwares',
    'Cloud backup for 10 years',
  ];
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
      <Content style={{ fontFamily: 'Source Sans Pro', width: '100%' }}>
        <Row gutter={24}>
          <Col span={matches.small ? 24 : 8}>
            <Card
              style={{ marginTop: '16px' }}
              title={<Title level={4}>Basic</Title>}
              extra={<Title level={3}> &#x20b9; 2899</Title>}>
              <List
                size='small'
                bordered
                dataSource={basic}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <Link to='/gst'>
                <Button
                  type='primary'
                  size='middle'
                  style={{ marginTop: '24px' }}>
                  Buy Now
                </Button>
              </Link>
            </Card>
          </Col>
          <Col span={matches.small ? 24 : 8}>
            <Card
              style={{ marginTop: '16px' }}
              title={<Title level={4}>Standard</Title>}
              extra={<Title level={3}> &#x20b9; 4899</Title>}>
              <List
                size='small'
                bordered
                dataSource={standard}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <Link to='/gst'>
                <Button
                  type='primary'
                  size='middle'
                  style={{ marginTop: '24px' }}>
                  Buy Now
                </Button>
              </Link>
            </Card>
          </Col>
          <Col span={matches.small ? 24 : 8}>
            <Card
              style={{ marginTop: '16px' }}
              title={<Title level={4}>Premium</Title>}
              extra={<Title level={3}> &#x20b9; 6899</Title>}>
              <List
                size='small'
                bordered
                dataSource={premium}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <Link to='/gst'>
                <Button
                  type='primary'
                  size='middle'
                  style={{ marginTop: '24px' }}>
                  Buy Now
                </Button>
              </Link>
            </Card>
          </Col>
        </Row>
      </Content>
    </React.Fragment>
  );
};

export default PricingComponent;
