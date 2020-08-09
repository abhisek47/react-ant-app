import React from 'react';
import {
  Layout,
  Typography,
  Card,
  Row,
  Col,
  Button,
  Divider,
  List,
} from 'antd';
import { useMedia } from 'react-media';

const PopularEntities = () => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 767px)',
    medium: '(min-width: 768px) and (max-width: 1199px)',
    large: '(min-width: 1200px)',
  };
  const data = [
    'GSTR 1 and GSTR 3B / Rs. 820+18%',
    'GST9/ Rs. 2500+18%',
    'GST4A/ Rs. 2000+18%',
  ];
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  const { Title, Paragraph } = Typography;
  const { Content } = Layout;
  return (
    <React.Fragment>
      <Layout className='layout' style={{ background: '#fff' }}>
        <Content
          style={{
            padding: matches.large ? '10px 50px' : '5px 30px',
            fontFamily: 'Source Sans Pro',
          }}>
          <Typography>
            <Title
              level={2}
              style={{
                fontWeight: '500',
                margin: '24px 10px',
                textAlign: 'left',
                fontFamily: 'Alegreya Sans',
              }}>
              We Provide Multi Professional Services
            </Title>
          </Typography>
          <Row gutter={16}>
            <Col span={matches.small ? 24 : 8}>
              <Card style={{ width: '100%', marginTop: '16px' }}>
                <Typography>
                  <Title level={4}>GST Registration</Title>
                  <Paragraph>
                    Goods and Services Tax is an indirect tax used in India on
                    the supply of goods and services. It is a comprehensive.
                  </Paragraph>
                </Typography>
                <Divider orientation='left'>Speacial Entities</Divider>
                <List
                  size='small'
                  bordered
                  dataSource={data}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <Button
                  type='primary'
                  size='middle'
                  style={{ marginTop: '24px' }}>
                  Get Started
                </Button>
              </Card>
            </Col>
            <Col span={matches.small ? 24 : 8}>
              <Card style={{ width: '100%', marginTop: '16px' }}>
                <Typography>
                  <Title level={4}>Company Registration</Title>
                  <Paragraph>
                    A company register is a register of organizations in the
                    jurisdiction they operate under.
                  </Paragraph>
                </Typography>
                <Divider orientation='left'>Speacial Entities</Divider>
                <List
                  size='small'
                  bordered
                  dataSource={data}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <Button
                  type='primary'
                  size='middle'
                  style={{ marginTop: '24px' }}>
                  Get Started
                </Button>
              </Card>
            </Col>
            <Col span={matches.small ? 24 : 8}>
              <Card style={{ width: '100%', marginTop: '16px' }}>
                <Typography>
                  <Title level={4}>Income Tax Return</Title>
                  <Paragraph>
                    Income Tax Return is the form in which assessee files
                    information about his Income and tax.
                  </Paragraph>
                </Typography>
                <Divider orientation='left'>Speacial Entities</Divider>
                <List
                  size='small'
                  bordered
                  dataSource={data}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <Button
                  type='primary'
                  size='middle'
                  style={{ marginTop: '24px' }}>
                  Get Started
                </Button>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default PopularEntities;
