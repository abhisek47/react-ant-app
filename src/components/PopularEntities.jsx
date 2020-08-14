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
  const taxFiling = [
    'GST registration/ Rs. 1000+18%',
    'GSTR 1 and GSTR 3B return filing / Rs. 820+18%',
    'TDS return filing/ Rs. 1899+18%',
  ];
  const compliances = [
    'Provident fund/ Rs. 2456+18%',
    'Employees state incuranc/  Rs. 3300+18%',
    'Partnership firm, Socity, NGO/ Rs. 2540+18%',
  ];
  const comapny = [
    'Company registration/ Rs. 10000+18%',
    'Trademark/ Rs. 4000+18%',
    'LLP registration/ Rs. 10000+18%',
  ];
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  const { Title } = Typography;
  const { Content } = Layout;
  return (
    <React.Fragment>
      <Layout className='layout' style={{ background: '#fff' }}>
        <Content
          style={{
            padding: matches.large ? '10px 50px' : '5px 30px',
            fontFamily: 'Source Sans Pro',
            width: matches.large ? '80%' : '100%',
            margin: '0 auto',
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
                  <Title level={4}>Tax Filing</Title>
                </Typography>
                <Divider orientation='left'>Speacial Entities</Divider>
                <List
                  size='small'
                  bordered
                  dataSource={taxFiling}
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
                  <Title level={4}>Company Filing</Title>
                </Typography>
                <Divider orientation='left'>Speacial Entities</Divider>
                <List
                  size='small'
                  bordered
                  dataSource={comapny}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <Link to='/private-limited-company'>
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
                  <Title level={4}>Compliances Filing</Title>
                </Typography>
                <Divider orientation='left'>Speacial Entities</Divider>
                <List
                  size='small'
                  bordered
                  dataSource={compliances}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <Link to='/income-tax-return-1'>
                  <Button
                    type='primary'
                    size='middle'
                    style={{ marginTop: '24px' }}>
                    Get Started
                  </Button>
                </Link>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default PopularEntities;
