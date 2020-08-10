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
import { Link } from 'react-router-dom';

const PopularEntities = () => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 767px)',
    medium: '(min-width: 768px) and (max-width: 1199px)',
    large: '(min-width: 1200px)',
  };
  const gst = [
    'GST registration/ Rs. 1000+18%',
    'GSTR 1 and GSTR 3B return filing / Rs. 820+18%',
    'GST9 return filing/ Rs. 2500+18%',
    'GST4A return filing/ Rs. 2000+18%',
  ];
  const incomeTax = [
    'Income tax return - 1/ Rs. 700+18%',
    'Income tax return - 2/ Rs. 2456+18%',
    'Income tax return - 3/ Rs. 3300+18%',
    'Income tax return - 4/ Rs. 2540+18%',
  ];
  const comapny = [
    'Company registration/ Rs. 10000+18%',
    'Proprietorship firm registration/ Rs. 4000+18%',
    'Registered partnership/ Rs. 9000+18%',
    'LLP registration/ Rs. 10000+18%',
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
                  dataSource={gst}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <Link to='/gst'>
                  <Button
                    type='primary'
                    size='middle'
                    style={{ marginTop: '24px' }}>
                    Get Started
                  </Button>
                </Link>
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
                  dataSource={comapny}
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
                  dataSource={incomeTax}
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
