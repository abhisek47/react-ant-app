import React from 'react';
import { useMedia } from 'react-media';
import { Layout, Typography, Row, Col, Space, Breadcrumb } from 'antd';
import { CheckCircleFilled, ExclamationCircleFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import RegHeader from './RegHeader';

const ItrThreeComponent = () => {
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
        'Form ITR-2 can no longer be filed by an individual who has brought forward/carry forward loss under the head “Income from house property.”',
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
            <Breadcrumb.Item>Income Tax Return - 3</Breadcrumb.Item>
          </Breadcrumb>
          <Typography>
            <RegHeader
              title='Income Tax Return - 3'
              paraOne='For individuals and HUF with income from profits of a business or profession. ITR 3 is the form used by the individuals and Hindu Undivided Families who are registered as ‘Partners’ in a firm. . This is applicable for the professionals but in a partnership profession. The partner must be earning income in the form of interest, salary, bonus, commission, etc.'
              tagline='Get your ITR-3 filing @₹ 3,899 Only'
            />
            <Row gutter={24}>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    Due Date for Filing ITR-3 Online AY 2020-21
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    ITR -1 has to be filed on or before 30 Nov of the following
                    year. After that, a late fee under section 234F is levied
                  </Paragraph>
                  <Title style={heading} level={2}>
                    Eligibility to file ITR-3
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    ITR-2 is filed by the taxpayers whose income is up to Rs 50
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
                    Ineligibility to file ITR-3
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    ITR-3 is filed by the taxpayers whose income is up to Rs 50
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

export default ItrThreeComponent;
