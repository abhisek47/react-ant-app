import React from 'react';
import { useMedia } from 'react-media';
import { Layout, Typography, Row, Col, Space, Breadcrumb } from 'antd';
import { CheckCircleFilled, ExclamationCircleFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import RegHeader from './RegHeader';

const ItrOneComponent = () => {
  const eligibility = [
    { id: 1, case: 'If the source of income is from one house property' },
    { id: 2, case: 'If the source of income is from pension or salary' },
    { id: 3, case: 'If the source of income is from other sources' },
  ];
  const ineligibility = [
    { id: 1, case: 'The taxpayer whose income is more than Rs 50 lakhs' },
    { id: 2, case: 'Non-residents and Residents but not ordinarily resident' },
    { id: 3, case: 'Taxpayers who have two or more house properties' },
    { id: 4, case: 'Taxpayer having income under business or profession' },
    { id: 5, case: 'Taxpayers who have long or short-term capital gains' },
    {
      id: 6,
      case:
        'Taxpayers whose income from agriculture means is greater than Rs. 5,000',
    },
    {
      id: 7,
      case:
        'The taxpayer who claims relief for foreign taxes paid or claim double taxation relief as mentioned in section 90/90A/91.',
    },
    {
      id: 8,
      case:
        'ITR 1 cannot be used by residents having any asset (including financial interest in any entity) located outside India or signing authority in any account located outside India.',
    },
    {
      id: 9,
      case:
        'Form ITR-1 can no longer be filed by an individual who has brought forward/carry forward loss under the head “Income from house property.”',
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
            <Breadcrumb.Item>Income Tax Return - 1</Breadcrumb.Item>
          </Breadcrumb>
          <Typography>
            <RegHeader
              title='Income Tax Return - 1'
              paraOne='ITR 1 - This Form is filed by the taxpayers and the individuals being a Resident (other thanNot Ordinarily Resident) having Total Income up to INR 50 lakhs, having Income from Salaries, One House Property, Other Sources (Interest etc.), and Agricultural Income up to INR 5 thousand. (Not for an Individual who is either Director in a company or has invested in Unlisted Equity Shares).'
              tagline='Get your ITR-1 filing @₹ 1,800 Only'
            />
            <Row gutter={16}>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    Eligibility to file ITR-1
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    ITR-1 is filed by the taxpayers whose income is up to Rs 50
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
                    Ineligibility to file ITR-1
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    ITR-1 is filed by the taxpayers whose income is up to Rs 50
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

export default ItrOneComponent;
