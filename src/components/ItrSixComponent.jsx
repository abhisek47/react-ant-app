import React from 'react';
import { useMedia } from 'react-media';
import { Layout, Typography, Row, Col, Space, Breadcrumb } from 'antd';
import { CheckCircleFilled, ExclamationCircleFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import RegHeader from './RegHeader';

const ItrSixComponent = () => {
  const eligibility = [
    {
      id: 1,
      case:
        'companies that are not claiming any exemption under Section11 but if',
    },
  ];
  const ineligibility = [
    {
      id: 1,
      case:
        'Companies are claiming an exemption u/s 11, who have Income from property held for charitable or religious purposes., then itr 6 cannot be filled.',
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
            <Breadcrumb.Item>Income Tax Return - 6</Breadcrumb.Item>
          </Breadcrumb>
          <Typography>
            <RegHeader
              title='Income Tax Return - 6'
              paraOne='ITR Form 6 or ITR 6 is an income tax return form that is used by companies to e-file income tax return if they do not claim exemption under Section 11 of the Income Tax Act, 1961. Under existing Income Tax rules, companies that can claim exemption u/s 11 are those who have income from property that is held for charitable or religious purposes.'
              tagline='Get your ITR-6 filing @₹ 5,000 Only'
            />
            <Row gutter={24}>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    Eligibility to file ITR-6
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    ITR-6 is filed by the taxpayers whose income is up to Rs 50
                    lakhs from below- mentioned sources:
                  </Paragraph>
                  {eligibility.map((cases) => (
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
                    Ineligibility to file ITR-6
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    ITR-6 is filed by the taxpayers whose income is up to Rs 50
                    lakhs from below- mentioned sources:
                  </Paragraph>
                  {ineligibility.map((cases) => (
                    <Space align='baseline' key={cases.id}>
                      <ExclamationCircleFilled
                        style={{
                          color: '#ff4d4f',
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
          </Typography>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default ItrSixComponent;
