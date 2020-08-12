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
} from 'antd';
import { Link } from 'react-router-dom';
import RegHeader from './RegHeader';
import PricingComponent from './PricingComponent';
import {
  esiReturnBasic,
  esiReturnStandard,
  esiReturnPremium,
} from './PricingDetails';
import { CaretRightOutlined } from '@ant-design/icons';

const EsiReturnComponent = () => {
  const esiReturnProcess = [
    {
      id: 1,
      case:
        'After verification of the form, the government will issue a 17 digit unique number.',
    },
    {
      id: 2,
      case:
        'The employee who is registered under this scheme will provide the employer with the filled form and photographs of his own family members as a part of the process of registration and will get an ESI card after registration.',
    },
    {
      id: 3,
      case:
        'Any change in the Company or its employees will be intimated to the ESIC.',
    },
  ];
  const esiReturnDocument = [
    {
      id: 1,
      case: 'Register of Attendance of the Employees',
    },
    {
      id: 2,
      case: 'Form 6 – Register',
    },
    {
      id: 3,
      case: 'Register of wages',
    },
    {
      id: 4,
      case:
        'Register of any accidents which have happened on the premises of the business',
    },
    {
      id: 5,
      case: 'Monthly returns and challans',
    },
  ];
  const stepRowOne = [
    {
      id: 1,
      case: 'Getting ESI Registration',
      details:
        'Establishmentsor Factoriesmust get themselves registered within 15 days of the Act becoming applicable to them by submitting an Employer’s Registration Form(Form- 01) to the relevant Regional Office.',
    },
    {
      id: 2,
      case: 'Obtaining Code Number',
      details:
        'A 17-digit identification number called the Code number will be provided which must be used in all Correspondence relating to the Scheme.Form 3(Return on Declaration) must also be submitted along with Form 1.',
    },
    {
      id: 3,
      case: 'For Employees',
      details:
        'At the time of joining the insurable employment, employees are required to fill in aDeclaration Form(Form1) and submit two copies of a family photo to the employer, which must be submitted to the relevant ESI Branch Office by his employer.',
    },
  ];
  const stepRowTwo = [
    {
      id: 1,
      case: 'Insurance Number',
      details:
        'The employee will then be allotted an insurance number for the purpose of his identification under the scheme.',
    },
    {
      id: 2,
      case: 'Temporary Identity Card',
      details:
        'The employees will also be issued a temporary identity card for availing medical benefit for him / herself and his/ her family for a duration of three months.',
    },
    {
      id: 3,
      case: 'Permanent Photo Identity Card',
      details:
        'Thereafter, he will be provided with a permanent photo identity card. A person once registered need not register again when there is a change of employment.The same registration can be transferred from one employment to another.',
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
            <Breadcrumb.Item>
              Employees State Insurance Return Filing
            </Breadcrumb.Item>
          </Breadcrumb>
          <Typography>
            <RegHeader
              title='Employees State Insurance Return Filing'
              paraOne='Established under the ESI Act, 1948, ESIC (Employees’ State Insurance Corporation) provides benefits to employees in the event of their sickness, death, disablement, injury, etc. The finance of this scheme comes from contributions from both employees and employers. Any employee who earns a monthly income of less than Rs. 21000 per month is covered under this scheme. Apart from employees, the family members of employees are also provided benefits under this Act. Any establishment that employs 10 or more employees is mandated by law to register under this Act. The contribution of employers in this scheme is 4.75% and that of employees is 1.75%, thus making a total of 6.5%.'
              tagline='Get your ESI Return Filing under GST @₹ 1,800 Only'
            />
            <PricingComponent
              basic={esiReturnBasic}
              standard={esiReturnStandard}
              premium={esiReturnPremium}
              basicPrice='799'
              standardPrice='1499'
              premiumPrice='4899'
            />
            <Row gutter={32}>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    What is the process after the form verification?
                  </Title>
                  {esiReturnProcess.map((cases) => (
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
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    How many returns are filed every year after the registration
                    is finalised?
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    After the registration ESI Returns have to be filed twice a
                    year. The following documents are required for the filing of
                    the returns:
                  </Paragraph>
                  <Row>
                    <Timeline
                      style={{ display: 'flex', flexDirection: 'column' }}>
                      {esiReturnDocument.map((cases) => (
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
              Process of Registration
            </Title>
            <Row gutter={24} style={matches.large && subHading}>
              {stepRowOne.map((row) => (
                <Col span={matches.small ? 24 : 8} key={row.id}>
                  <Space direction='vertical' style={{ marginTop: '24px' }}>
                    <Card title={row.case} bordered={false}>
                      {row.details}
                    </Card>
                  </Space>
                </Col>
              ))}
            </Row>
            <Row gutter={24} style={matches.large && subHading}>
              {stepRowTwo.map((row) => (
                <Col span={matches.small ? 24 : 8} key={row.id}>
                  <Space direction='vertical' style={{ marginTop: '24px' }}>
                    <Card title={row.case} bordered={false}>
                      {row.details}
                    </Card>
                  </Space>
                </Col>
              ))}
            </Row>
          </Typography>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default EsiReturnComponent;
