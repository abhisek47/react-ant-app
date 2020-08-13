import React from 'react';
import { useMedia } from 'react-media';
import { Layout, Typography, Row, Col, Space, Breadcrumb } from 'antd';
import { CheckCircleFilled, ExclamationCircleFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import RegHeader from './RegHeader';

const ItrTwoComponent = () => {
  const eligibility = [
    {
      id: 1,
      case:
        'Taxpayer having income exceeding Rs. 50 Lakhsfrom salary,profession etc',
    },
    { id: 2, case: 'Taxpayer Having foreign assets / income' },
    {
      id: 3,
      case: 'Taxpayer Having agricultural income in excess of Rs. 5,000',
    },
    { id: 4, case: 'Taxpayer having income under capiatal gain' },
    {
      id: 5,
      case: 'Taxpayer Having income from business or profession as a partner',
    },
    { id: 6, case: 'Taxpayer Having more than one house property' },
    {
      id: 7,
      case: 'Taxpayers having DIN or owing private limited company shares.',
    },
  ];
  const ineligibility = [
    { id: 1, case: 'Itr2 cannot be filed by LLP' },
    {
      id: 2,
      case: 'Itr2cannot be filled by company,society,trust,partnership etc',
    },
    {
      id: 3,
      case:
        'Itr2 cannot be filled by proprietor having business or professional income',
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
            <Breadcrumb.Item>Income Tax Return - 2</Breadcrumb.Item>
          </Breadcrumb>
          <Typography>
            <RegHeader
              title='Income Tax Return - 2'
              paraOne='Individuals and Hindu Undivided Families who have their Income for the Financial Year through Salary or Pension, more than One House Property, Income from Capital Gains, Income from foreign assets/Income, Income from business or profession as a partner (not proprietor) and other sources including lottery, racehorses, legal gambling are eligible to file their IT Return using ITR-2. Individuals who are not eligible to file using ITR-1, because of their income exceeding ₹ 50 Lakhs are also eligible to file itr2.'
              tagline='Get your ITR-2 filing @₹ 3,899 Only'
            />
            <Row gutter={24}>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    Due Date for Filing ITR 2 Online AY 2020-21
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    ITR -2 has to be filed on or before 30 Nov of the following
                    year. After that, a late fee under section 234F is levied
                  </Paragraph>
                  <Title style={heading} level={2}>
                    Eligibility to file ITR-2
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
                    Ineligibility to file ITR-2
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    ITR-2 is filed by the taxpayers whose income is up to Rs 50
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

export default ItrTwoComponent;
