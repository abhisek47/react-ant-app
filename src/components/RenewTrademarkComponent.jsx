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
} from 'antd';
import { Link } from 'react-router-dom';
import RegHeader from './RegHeader';
import PricingComponent from './PricingComponent';
import {
  tmrenewBasic,
  tmrenewStandard,
  tmrenewPremium,
} from './PricingDetails';
import { CheckCircleFilled } from '@ant-design/icons';

const RenewTrademarkComponent = () => {
  const required = [
    {
      id: 1,
      case:
        'This form can be filed on or before 6(six) months from the date of expiration of 10 years.',
    },
    {
      id: 2,
      case:
        'If no application for renewal is made within one or three months beforeexpiration, the registrar shall send a notice to the owner regarding renewal purpose.A trademark cannot be ceased unless a notice has been served. Governmental fee for renewal along with FORM(TM - 12) is to be submitted.',
    },
    {
      id: 3,
      case:
        'In case the owner forgets to renew the trademark by the expiration person and the mark expires.The owner can apply for restoration of the trademark by filing FORM(TM- 13).He can do so, from six months to one year after the expiration of such registration.',
    },
    {
      id: 4,
      case:
        'After receiving the application for either renew or restoring, the Registrar shall advertise the mark and wait for objections if raised.',
    },
    {
      id: 5,
      case:
        'After the expiry of a waiting period, if no objection raised, once again the mark will be entered into the journal.',
    },
  ];
  const tmrenewDocument = [
    {
      id: 1,
      case: 'Copy of the Registration Certificate',
    },
    {
      id: 2,
      case: 'Power of Attorney',
    },
    {
      id: 3,
      case: 'Identity proof of the Applicant',
    },
    {
      id: 4,
      case: 'Address of the Applicant',
    },
    {
      id: 5,
      case: 'A Copy of TM-1 Form',
    },
    {
      id: 6,
      case: 'A Renewal Application made in TM-12 Form',
    },
    {
      id: 7,
      case: 'Duly filled Form-18',
    },
    {
      id: 8,
      case: 'A Government Fees of appropriate amount',
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
            <Breadcrumb.Item>Trademark Renewal</Breadcrumb.Item>
          </Breadcrumb>
          <Typography>
            <RegHeader
              title='Trademark Renewal'
              paraOne='The registration of a trademark is valid only for a period of 10 years. After which, it can be renewed from time to time. Trademark renewal preserves those rights which are only available to a registered mark. In case the proprietor fails to renew the trademark, then he shall lose all the protection that comes along with registration. For example, a registered trademark has the benefit of the legal presumption of ownership. That means that the burden of proof is on others to try and disprove your ownership.'
              tagline='Renewal your Trademark  @₹ 5,000 Only'
            />
            <PricingComponent
              basic={tmrenewBasic}
              standard={tmrenewStandard}
              premium={tmrenewPremium}
              basicPrice='5000'
              standardPrice='7500'
              premiumPrice='10000'
            />
            <Row gutter={32}>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    Trademark lasts for 10 years and after the expiry of 10
                    years period it may lapse,if not renewed.
                  </Title>
                  <Paragraph level={4} style={matches.large ? subHading : ''}>
                    For renewal, you need to fill a form (TM-12).
                  </Paragraph>
                  {required.map((cases) => (
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
                    Documents Required for Renewal Trademark
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    In below all the documents is required
                  </Paragraph>
                  <Row>
                    <Timeline
                      style={{ display: 'flex', flexDirection: 'column' }}>
                      {tmrenewDocument.map((cases) => (
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
              <Col span={12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    Trademark can be renewed in two ways
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    Renew your trademark for changing any sign or word in the
                    existing mark
                  </Paragraph>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    Renew your trademark without any change
                  </Paragraph>
                </Space>
              </Col>
            </Row>
          </Typography>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default RenewTrademarkComponent;
