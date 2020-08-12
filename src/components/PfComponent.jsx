import React from 'react';
import { useMedia } from 'react-media';
import {
  Layout,
  Typography,
  Row,
  Col,
  Space,
  Breadcrumb,
  Timeline,
  Card,
  Divider,
} from 'antd';
import { Link } from 'react-router-dom';
import RegHeader from './RegHeader';
import PricingComponent from './PricingComponent';
import { pfBasic, pfStandard, pfPremium } from './PricingDetails';

const PfComponent = () => {
  const employee = [
    {
      id: 1,
      case: 'Full-time employees',
      des:
        'Studies show that staffers who work from home are more productive than those who work in a typical office environment.',
    },
    {
      id: 2,
      case: 'Part-Time Employees',
      des:
        'A part-time job is a form of employment that carries fewer hours per week than a full-time job.',
    },
    {
      id: 3,
      case: 'Employees Working at Home',
      des:
        'A full-time job is employment in which a person works a minimum number of hours defined as such by their employer.',
    },
    {
      id: 4,
      case: 'Contract Employees',
      des:
        'A contract employee is an individual retained by a company for a predetermined time, for a predetermined price.',
    },
    {
      id: 5,
      case: 'Full-time Consultants',
      des:
        'A contract employee is an individual retained by a company for a predetermined time, for a predetermined price.',
    },
  ];
  const PfDocument = [
    { id: 1, case: 'Pan card of Establishment' },
    { id: 2, case: 'Certificate of Incorporation' },
    {
      id: 3,
      case: 'Canceled cheque of Establishment',
    },
    {
      id: 4,
      case:
        'Address Proof of establishment (Rent agreement, Water/ Electricity / Telephone Bill in the name of establishment)',
    },
    {
      id: 5,
      case: 'Specimen signature of Directors and Authorised Signatories',
    },
    {
      id: 6,
      case:
        'Consent of Majority of Employees in case of voluntary registration',
    },
    {
      id: 7,
      case: 'Digital Signature of Authorized Applicant (Class-2)',
    },
  ];
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 767px)',
    medium: '(min-width: 768px) and (max-width: 1199px)',
    large: '(min-width: 1200px)',
  };
  const heading = {
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: 'Alegreya Sans',
  };
  const subHading = {
    fontWeight: '600',
    fontSize: '16px',
    fontFamily: 'Source Sans Pro',
  };
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  const { Title, Paragraph } = Typography;
  const { Content } = Layout;
  return (
    <React.Fragment>
      <Layout
        className='layout'
        style={{ background: '#fff', padding: '24px 0' }}>
        <Content
          style={{
            padding: matches.large ? '10px 50px' : '5px 30px',
            textAlign: 'left',
            fontFamily: 'Source Sans Pro',
            width: matches.large ? '80%' : '100%',
            margin: '0 auto',
          }}>
          <Breadcrumb style={{ marginBottom: '12px' }}>
            <Breadcrumb.Item>
              <Link to='/'>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Provident Fund Registration</Breadcrumb.Item>
          </Breadcrumb>
          <Typography>
            <RegHeader
              title='Employees Provident Fund Registration'
              paraOne='Establishment Registration with Employers Provident Fund Organisation (EPFO) is mandatory if the number of employees exceeds 20 and may be obtained voluntarily if the employee’s number is less than twenty. Our dedicated team will help you to your company with EPFO.'
              tagline='Get your provident fund registered  @₹ 8,000 Only'
            />
            <PricingComponent
              basic={pfBasic}
              standard={pfStandard}
              premium={pfPremium}
              basicPrice='8000'
              standardPrice='15000'
              premiumPrice='26000'
            />
            <Row gutter={32}>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    Meaning of Employee
                  </Title>
                  {employee.map((cases) => (
                    <Space direction='vertical' key={cases.id}>
                      <Divider orientation='left'>{cases.case}</Divider>
                      <Paragraph style={matches.large ? subHading : ''}>
                        {cases.des}
                      </Paragraph>
                    </Space>
                  ))}
                </Space>
              </Col>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    Documents Required for Provident Fund Registration
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    In below all the documents is required
                  </Paragraph>
                  <Row>
                    <Timeline
                      style={{ display: 'flex', flexDirection: 'column' }}>
                      {PfDocument.map((cases) => (
                        <Space align='baseline' key={cases.id}>
                          <Timeline.Item
                            style={{ padding: ' 5px 0', margin: '0' }}>
                            <Paragraph
                              level={4}
                              style={matches.large ? subHading : ''}>
                              {cases.case}
                            </Paragraph>
                          </Timeline.Item>
                        </Space>
                      ))}
                    </Timeline>
                  </Row>
                </Space>
              </Col>
            </Row>
            <Title style={heading} level={2}>
              Type of Registration
            </Title>
            <Row gutter={24} style={matches.large && subHading}>
              <Col span={matches.small ? 24 : 8}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Card title='Compulsary Registration' bordered={false}>
                    The establishment employing 20 or more employees is required
                    to obtain registration with PF department within 30 days of
                    reaching that number. This number is irrespective of salary.
                  </Card>
                </Space>
              </Col>
              <Col span={matches.small ? 24 : 8}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Card title='Voluntary Registration' bordered={false}>
                    The employer with the consent of its employee can also seek
                    optional coverage for its establishment so that their
                    employees avail the benefit of the provident fund.
                  </Card>
                </Space>
              </Col>
              <Col span={matches.small ? 24 : 8}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Card title='PF Registration' bordered={false}>
                    As the PF registration is required only when the number of
                    employees reaches 20, hence ESIC registration is also
                    necessary as is required to be obtained when the number of
                    employee reaches 10.
                  </Card>
                </Space>
              </Col>
            </Row>
          </Typography>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default PfComponent;
