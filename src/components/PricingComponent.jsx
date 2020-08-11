import React from 'react';
import { Layout, Typography, Card, Row, Col, Button, List } from 'antd';
import { useMedia } from 'react-media';
import { Link } from 'react-router-dom';

const PricingComponent = ({
  basic,
  standard,
  premium,
  basicPrice,
  standardPrice,
  premiumPrice,
}) => {
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
              extra={<Title level={3}> &#x20b9; {basicPrice}</Title>}>
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
              extra={<Title level={3}> &#x20b9; {standardPrice}</Title>}>
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
              extra={<Title level={3}> &#x20b9; {premiumPrice}</Title>}>
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
