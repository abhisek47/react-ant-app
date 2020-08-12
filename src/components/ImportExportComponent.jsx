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
import { CheckCircleFilled, CaretRightOutlined } from '@ant-design/icons';

const ImportExportComponent = () => {
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
  const iecStep = [
    {
      id: 1,
      case: 'Filing of documents on your behalf',
    },
    { id: 2, case: 'Paying necessary fee' },
    {
      id: 3,
      case: 'Apply for licence',
    },
    {
      id: 4,
      case: 'Transfer the licence to you after approval',
    },
  ];
  const iecDocument = [
    { id: 1, case: 'Copy of PAN Card' },
    { id: 2, case: 'Copy of Aadhaar Card/ Voter identity card of applicant' },
    {
      id: 3,
      case:
        'Telephone Bill/mobile postpaid bill/electricity bill/rent agreement/lease deed/sale deed /partnership deed as a address proof .',
    },
    {
      id: 4,
      case:
        'Cancelled cheque of individual/enterprise having name printed on cheque.',
    },
  ];
  const iecCases = [
    {
      id: 1,
      case:
        'IEC is mandatory for import and export of goods.However in the following cases IEC is not mandatory',
    },
    {
      id: 2,
      case:
        'Person exporting or importing goods for personal use , not related to business',
    },
    {
      id: 3,
      case:
        'Persons exporting or importing goods to/from Nepal or Myanmar through Indo- Myanmar border areas, upto value of rs 25000',
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
            <Breadcrumb.Item>Import Export Code Registration</Breadcrumb.Item>
          </Breadcrumb>
          <Typography>
            <RegHeader
              title='Import Export Code Registration'
              paraOne='IEC(Import export code ) or import export licence . is a 10 digit code(based on pan number) which is provided by DGFT for import export transactions. Iec can be obtained in personal name or in company name. An IEC number issued to applicant shall be valid for all its divisions/ units/ factories/branches. IEC is valid for lifetime and no renewal is needed.'
              tagline='Get your Import Export Code egistered @₹ 3,500 Only'
            />
            <Row gutter={16}>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    When Import Export Code Registration is mandatory ?
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    In below all cases registration is mandatory .
                  </Paragraph>
                  {iecCases.map((cases) => (
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
                    Documents Required for Import Export Code Registration
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    In below all the documents is required
                  </Paragraph>
                  <Row>
                    <Timeline
                      style={{ display: 'flex', flexDirection: 'column' }}>
                      {iecDocument.map((cases) => (
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
            <Row>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    Registration step for Import Export Code
                  </Title>
                  {iecStep.map((cases) => (
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
                  <Collapse
                    style={{ width: '100%' }}
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

export default ImportExportComponent;
