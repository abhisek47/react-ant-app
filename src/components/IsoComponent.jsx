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
  List,
} from 'antd';
import { Link } from 'react-router-dom';
import RegHeader from './RegHeader';
import { CheckCircleFilled } from '@ant-design/icons';
import { isoRawOne, isoRawTwo, isoRawThree, isoRawFour } from './IsoDocuments';

const IsoComponent = () => {
  const isoOrgBenefits = [
    {
      id: 1,
      case: 'Provides senior management with an efficient management process',
    },
    { id: 2, case: 'Sets out areas of responsibility across the organisation' },
    {
      id: 3,
      case: 'Mandatory if you want to tender for some public sector work',
    },
    {
      id: 4,
      case: 'Communicates a positive message to staff and customers',
    },
    {
      id: 5,
      case:
        'Identifies and encourages more efficient and time saving processes',
    },
    { id: 6, case: 'Highlights deficiencies' },
    { id: 7, case: 'Reduces your costs' },
    { id: 8, case: 'Provides continuous assessment and improvement' },
    { id: 9, case: 'Marketing opportunities' },
  ];
  const isoCustomerBenefits = [
    {
      id: 1,
      case: 'Improved quality and service',
    },
    { id: 2, case: 'Delivery on time' },
    {
      id: 3,
      case: 'Right first time attitude',
    },
    {
      id: 4,
      case: 'Fewer returned products and complaints',
    },
    {
      id: 5,
      case: 'Independent audit demonstrates commitment to quality',
    },
  ];
  const isoDocument = [
    {
      id: 1,
      case: 'PAN Card',
    },
    {
      id: 2,
      case: 'Passport size photograph',
    },
    {
      id: 3,
      case: 'Aadhaar Card/ Voter identity card',
    },
    {
      id: 4,
      case: 'Two copies of sales bill/purchase bill.',
    },
  ];
  const data = [
    'You can’t use or modify ISO’s logo…it is ISO’s brand and intellectual property.',
    'You can’t say ISO 9001 or ISO certified…You must spell it out. We are ISO 9001:2013 certified; we are not certified by ISO or by ISO 9001.',
    'ISO 9001:2015 cannot be listed on your products or used in literature to imply product certification…It’s not a product certification it’s a company certification.',
    'You must be careful with your scope description so it properly depicts your certified activities and geographic locations',
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
              International Organization for Standardization
            </Breadcrumb.Item>
          </Breadcrumb>
          <Typography>
            <RegHeader
              title='International Organization for Standardization(ISO)'
              paraOne='ISO 9001 is the international standard for a quality management system (“QMS”).  In order to be certified to the ISO 9001 standard, a company must follow the requirements set forth in the ISO 9001 Standard. The standard is used by organizations to demonstrate their ability to consistently provide products and services that meet customer and regulatory requirements and to demonstrate continuous improvement.'
              tagline='Get your ISO registered @₹ 6,000 Only'
            />
            <Title style={heading} level={2}>
              Benifits of getting ISO registered
            </Title>
            <Row gutter={32}>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    Some of the benefits to your organisation
                  </Paragraph>
                  {isoOrgBenefits.map((cases) => (
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
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    Some of the benefits to your customers
                  </Paragraph>
                  {isoCustomerBenefits.map((cases) => (
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
            </Row>
            <Row gutter={32}>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Card style={{ fontFamily: 'Source Sans Pro' }}>
                    <Divider orientation='left'>
                      What Can You Do With This Certification?
                    </Divider>
                    <Paragraph level={4} style={matches.large ? subHading : ''}>
                      You can use the fact that your company is ISO
                      9001:2015 certified in your marketing. Your management
                      system and its processes have been certified to ISO
                      9001 so you do want to talk about your successful
                      registration to ISO 9001 just as long as you do not
                      suggest that your products are certified or that you are
                      certified by ISO, which is what ISO certified implies.
                    </Paragraph>
                  </Card>
                </Space>
                <Space direction='vertical' style={{ marginTop: '10px' }}>
                  <Card style={{ fontFamily: 'Source Sans Pro' }}>
                    <Divider orientation='left'>What can’t you do?</Divider>
                    <List
                      size='large'
                      bordered
                      dataSource={data}
                      renderItem={(item) => <List.Item>{item}</List.Item>}
                    />
                  </Card>
                </Space>
              </Col>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    Documents Required for ISO Registration
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    In below all the documents is required
                  </Paragraph>
                  <Row>
                    <Timeline
                      style={{ display: 'flex', flexDirection: 'column' }}>
                      {isoDocument.map((cases) => (
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
              Few detailed advantages of having ISO
            </Title>
            <Row gutter={16} style={matches.large && subHading}>
              {isoRawOne.map((list) => (
                <Col span={matches.small ? 24 : 8} key={list.id}>
                  <Card bordered={false}>
                    <Title style={heading} level={4}>
                      {list.title}
                    </Title>
                    <Paragraph>{list.para}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row gutter={16} style={matches.large && subHading}>
              {isoRawTwo.map((list) => (
                <Col span={matches.small ? 24 : 8} key={list.id}>
                  <Card bordered={false}>
                    <Title style={heading} level={4}>
                      {list.title}
                    </Title>
                    <Paragraph>{list.para}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row gutter={16} style={matches.large && subHading}>
              {isoRawThree.map((list) => (
                <Col span={matches.small ? 24 : 8} key={list.id}>
                  <Card bordered={false}>
                    <Title style={heading} level={4}>
                      {list.title}
                    </Title>
                    <Paragraph>{list.para}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row gutter={16} style={matches.large && subHading}>
              {isoRawFour.map((list) => (
                <Col span={matches.small ? 24 : 8} key={list.id}>
                  <Card bordered={false}>
                    <Title style={heading} level={4}>
                      {list.title}
                    </Title>
                    <Paragraph>{list.para}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </Typography>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default IsoComponent;
