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
import { CheckCircleFilled, CaretRightOutlined } from '@ant-design/icons';

const TrademarkComponent = () => {
  const required = [
    {
      id: 1,
      case:
        'Any name (including personal or surname of the applicant or predecessor in business or the signature of the person), which is not unusual for trade to adopt as a mark.',
    },
    {
      id: 2,
      case:
        'An invented word or any arbitrary dictionary word or words, not being directly descriptive of the character or quality of the goods/ service.',
    },
    {
      id: 3,
      case: 'Letters or numerals or any combination thereof.',
    },
    {
      id: 4,
      case:
        'The right to proprietorship of a trademark may be acquired by either registration under the Act or by use in relation to particular goods or service.',
    },
    { id: 5, case: 'Devices, including fancy devices or symbols' },
    { id: 6, case: 'Monograms' },
    {
      id: 7,
      case:
        'Combination of colors or even a single color in combination with a word or device',
    },
    {
      id: 8,
      case: 'Shape of goods or their packaging',
    },
    {
      id: 9,
      case: 'Marks constituting a 3- dimensional sign.',
    },
    {
      id: 10,
      case:
        'Sound marks when represented in conventional notation or described in words by being graphically represented.',
    },
  ];
  const trademarkDocument = [
    {
      id: 1,
      case: 'PAN Card',
    },
    {
      id: 2,
      case: 'Adhaar Card',
    },
    {
      id: 3,
      case: 'Trade licence for individuals',
    },
    {
      id: 4,
      case: 'PAN card,coi ,moa,aoa in case of company',
    },
    {
      id: 5,
      case: 'PAN card and deed in case of partnership',
    },
  ];
  const trademarkReg = [
    {
      id: 1,
      case:
        'I A certified priority document or its duly notarized copy is to be submitted with the Trade Marks Office in original within two months of the filing of the application.If the certificate is not in English, a notarized English translation is required.',
    },
    {
      id: 2,
      case:
        'USE : Date of first use of the trademark in India, if at all used or else the application can be filed on a proposed to be used In case the use of the trademark is claimed prior to the date of the application, an affidavit testifying to such use along with supporting documents required for trademark registration, shall have be filed along with the application. [The term ‘use’ in India has an extensive meaning and does not necessarily mean physical presence of the goods or services in India. Advertisement of the mark in foreign journals having circulation in India or the use of the mark in sales invoices, letterheads etc.bearing the trademark shall constitute ‘use’ of the mark in India.].',
    },
    {
      id: 3,
      case:
        'Power of Attorney : A prescribed document simply signed by the authorized signatory of the Applicant with the name and designation clearly mentioned(no legalization/ notarization is required).',
    },
    {
      id: 4,
      case:
        'A partnership firm, body corporates can give a certificate of registration under MSME or Start-u India scheme to get a 50% rebate on the Government fees',
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
            <Breadcrumb.Item>Trademark</Breadcrumb.Item>
          </Breadcrumb>
          <Typography>
            <RegHeader
              title='Trademark'
              paraOne='A trademark  is a type of intellectual property consisting of a recognizable sign, design,or expression which identifies products or services of a particular source from those of others, although trademarks used to identify services are usually called service marks. The trademark owner can be an individual, business organization, or any legal entity. A trademark may be located on a package, a label, a voucher, or on the product itself. For the sake of corporate identity, trademarks are often displayed on company buildings. It is legally recognized as a type of intellectual property.'
              tagline='Get your Trademark registered @₹ 6,940 Only'
            />
            {/* <PricingComponent
              basic={trademarkBasic}
              standard={trademarkStandard}
              premium='none'
              basicPrice='6490'
              standardPrice='11988'
            /> */}
            <Row gutter={32}>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    What can be registered ?
                  </Title>
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
                    Softcopy of trademark to be registered along with list of
                    goods and services For which registration is needed.
                  </Title>
                  {trademarkReg.map((cases) => (
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
            </Row>
            <Row gutter={24}>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    Documents Required for Trademark Registration
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    In below all the documents is required
                  </Paragraph>
                  <Row>
                    <Timeline
                      style={{ display: 'flex', flexDirection: 'column' }}>
                      {trademarkDocument.map((cases) => (
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
                      What are the benefits of Trademark registration ?
                    </Title>
                  </Typography>
                  <Paragraph style={matches.large ? subHading : ''}>
                    The registration of a trademark confers upon the owner the
                    exclusive right to the use the trademark in relation to the
                    goods or services in respect of which the mark is registered
                    and to indicate so by using the symbol (R), and seek the
                    relief of infringement in appropriate courts in the country.
                    The exclusive right is however subject to any conditions
                    entered on the register such as limitation of area of use
                    etc. Also, where two or more persons have registered
                    identical or nearly similar marks due to special
                    circumstances, such exclusive right does not operate against
                    each other.
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

export default TrademarkComponent;
