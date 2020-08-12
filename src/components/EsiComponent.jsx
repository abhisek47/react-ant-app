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
  Collapse,
} from 'antd';
import { Link } from 'react-router-dom';
import RegHeader from './RegHeader';
import PricingComponent from './PricingComponent';
import { esiBasic, esiStandard, esiPremium } from './PricingDetails';
import { CheckCircleFilled, CaretRightOutlined } from '@ant-design/icons';

const EsiComponent = () => {
  const tab1 = [
    {
      id: 1,
      title: 'How to get a company registered ?',
      details:
        'Picking the right company structure for your business is as important as any other business-related activity. The right business structure will allow your enterprise to operate efficiently and meet your required business targets. In India, every business must register themselves as part of the mandatory legal compliance. Before we learn how to register a company, let’s try and understand the types of business structures in India.',
    },
    {
      id: 2,
      title: 'What is trademark registration ?',
      details:
        'A trademark is a type of intellectual property consisting of a recognizable sign, design, or expression which identifies products or services of a particular source from those of others, although trademarks used to identify services are usually called service marks.',
    },
    {
      id: 3,
      title: 'What is import export code registration ?',
      details:
        'In this age of cut- throat competition, everyone wants to grow their business beyond the limits of the domestic market.However, doing business globally isn’t just a cup of tea for everyone.Before going global, you need to follow several procedures and laws in place and get different registration and license.IEC(Import Export Code) license is one of such prerequisite when you’re thinking of importing or exporting from India.',
    },
  ];
  const esiBenefits = [
    {
      id: 1,
      case:
        'Sickness benefits at the rate of 70% (in the form of salary), in case of any certified illness certified and which lasts for a maximum of 91 days in any year',
    },
    { id: 2, case: 'Medical Benefits to an employee and his family members' },
    {
      id: 3,
      case: 'Maternity Benefit to the women who are pregnant (paid leaves)',
    },
    {
      id: 4,
      case:
        'If the death of the employee happens while on work – 90% of salary is given to his dependents every month after the death of the employee',
    },
    { id: 5, case: 'Same as above in case of disability of the employee' },
    { id: 6, case: 'Funeral expenses' },
    { id: 7, case: 'Old age care medical expenses' },
  ];
  const esiDocument = [
    {
      id: 1,
      case:
        'A registration certificate obtained either under the: a. Factories Act b.Shops and Establishment Act',
    },
    {
      id: 2,
      case:
        'Certificate of Registration in case of Company, and Partnership deed in case of a Partnership',
    },
    {
      id: 3,
      case:
        'Memorandum of Association and Articles of Association of the Company',
    },
    {
      id: 4,
      case: 'A list of all the employees working in the Establishment',
    },
    {
      id: 5,
      case:
        'PAN Card of the Business Entity as well as all the Employees working under the entity',
    },
    {
      id: 6,
      case: 'The compensation details of all the employees',
    },
    {
      id: 7,
      case: 'A cancelled cheque of the Bank Account of the Company',
    },
    {
      id: 8,
      case: 'List of Directors of the Company',
    },
    {
      id: 9,
      case: 'List of the Shareholders of the Company',
    },
    {
      id: 10,
      case: 'Register containing the attendance of the employees',
    },
  ];
  const esiEntities = [
    {
      id: 1,
      case: 'Shops',
    },
    { id: 2, case: 'Restaurants or Hotels only engaged in sales.' },
    {
      id: 3,
      case: 'Cinemas',
    },
    {
      id: 4,
      case: 'Road Motor Transport Establishments',
    },
    {
      id: 5,
      case:
        'Newspaper establishments.(which is not covered under the factory act)',
    },
    { id: 6, case: 'Private Educational Institutions' },
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
  const { Panel } = Collapse;
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
            <Breadcrumb.Item>
              Employees State Insurance Registration
            </Breadcrumb.Item>
          </Breadcrumb>
          <Typography>
            <RegHeader
              title='Employees State Insurance Registration'
              paraOne='ESI stands for Employee State Insurance managed by the Employee State Insurance Corporation which is an autonomous body created by the law under the Ministry of Labour and Employment, Government of India. This scheme is started for Indian workers.  Under this scheme, the workers are provided with a huge variety of medical, monetary and other benefits by the employer. Any Company having more than 10 employees (in some states it is 20 employees) who have the maximum salary of Rs. 15000/- has to mandatorily register itself with the ESIC.'
              paraTwo='Under this scheme, the employer needs to contribute an amount of 4.75% of the total monthly salary payable to the employee whereas the employer needs to contribute only 1.75% of his monthly salary every month of the year. The only exemption to the employee in paying his contribution is whose salary is less than Rs. 100/- per day.'
              tagline='Get your ESI registered @₹ 8,000 Only'
            />
            <PricingComponent
              basic={esiBasic}
              standard={esiStandard}
              premium={esiPremium}
              basicPrice='8000'
              standardPrice='15000'
              premiumPrice='26000'
            />
            <Row gutter={32}>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    What are the benefits of ESI registration ?
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    The benefits of registering under this scheme are varied.
                    Some of them are:
                  </Paragraph>
                  {esiBenefits.map((cases) => (
                    <Space align='baseline' key={cases.id}>
                      <CheckCircleFilled
                        style={{
                          color: '#52c41a',
                        }}
                      />
                      <Paragraph
                        level={4}
                        style={matches.large ? subHading : ''}>
                        {cases.case}
                      </Paragraph>
                    </Space>
                  ))}
                </Space>
              </Col>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    Documents Required for ESI Registration
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    In below all the documents is required
                  </Paragraph>
                  <Row>
                    <Timeline
                      style={{ display: 'flex', flexDirection: 'column' }}>
                      {esiDocument.map((cases) => (
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
            <Row gutter={24}>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    Which are the entities covered by the ESI ?
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    As per the government notification dated Sec 1(5) of the ESI
                    Act the following entities are covered:
                  </Paragraph>
                  {esiEntities.map((cases) => (
                    <Space align='baseline' key={cases.id}>
                      <CaretRightOutlined
                        style={{
                          color: '#52c41a',
                        }}
                      />
                      <Paragraph
                        level={4}
                        style={matches.large ? subHading : ''}>
                        {cases.case}
                      </Paragraph>
                    </Space>
                  ))}
                </Space>
              </Col>
              <Col span={matches.small ? 24 : 12}>
                <Space
                  direction='vertical'
                  style={{ marginTop: '24px', width: '100%' }}>
                  <Typography>
                    <Title
                      level={2}
                      style={{
                        fontWeight: '500',
                        textAlign: 'left',
                        fontFamily: 'Alegreya Sans',
                      }}>
                      Questions Related Employees State Insurance
                    </Title>
                  </Typography>
                  <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                    expandIcon={({ isActive }) => (
                      <CaretRightOutlined rotate={isActive ? 90 : 0} />
                    )}
                    className='site-collapse-custom-collapse'>
                    {tab1.map((tab) => (
                      <Panel
                        header={tab.title}
                        key={tab.id}
                        className='site-collapse-custom-panel'>
                        <p>{tab.details}</p>
                      </Panel>
                    ))}
                  </Collapse>
                </Space>
              </Col>
            </Row>
          </Typography>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default EsiComponent;
