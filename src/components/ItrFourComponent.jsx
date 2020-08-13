import React from 'react';
import { useMedia } from 'react-media';
import { Layout, Typography, Row, Col, Space, Breadcrumb } from 'antd';
import { CheckCircleFilled, ExclamationCircleFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import RegHeader from './RegHeader';

const ItrFourComponent = () => {
  const eligibility = [
    {
      id: 1,
      case: 'Presumptive Income computed as per Sections 44AD, 44ADA and 44AE,',
    },
    { id: 2, case: 'Salary or pension,' },
    {
      id: 3,
      case:
        'Income from single house property (provided there is no brought forward loss or loss to be carried forward),',
    },
    {
      id: 4,
      case:
        'Income from other sources (including winnings or loss from lottery and racehorses, other than income chargeable at special rates, and including family pension)',
    },
    {
      id: 5,
      case:
        'In the case of clubbed income, i.e., the income of another person (spouse, minor child, etc.) is to be clubbed with the income of the taxpayer.',
    },
  ];
  const ineligibility = [
    { id: 1, case: 'If taxpayer total income is more Rs.50 lakh.' },
    {
      id: 2,
      case: 'If taxpayer has any brought forward losses from previous years.',
    },
    {
      id: 3,
      case:
        'If taxpayer have foreign assets or have generated a foreign income.',
    },
    {
      id: 4,
      case: 'If the taxpayer has income from more than one house property.',
    },
    { id: 5, case: 'If the taxpayer is Director of a company.' },
    {
      id: 6,
      case: 'If taxpayer is an NRI or an RNOR.',
    },
    {
      id: 7,
      case:
        'If taxpayer has any income to be apportioned following Section 5A.',
    },
    {
      id: 8,
      case:
        'If there is Capital gains/losses on the sale of investment/ property,',
    },
    {
      id: 9,
      case:
        'If tax payer is assessable for the complete or part of the income on which TDS has been deducted in the hands of the person other than the assessee.',
    },
    {
      id: 10,
      case:
        'Dividend income exceeding Rs. 10 lakhs taxable under Section 115BBDA. .Assessee has any unexplained income(i.e.cash credit, unexplained investment, etc.) taxable at 60% u / s 115BBE.',
    },
    {
      id: 11,
      case:
        'Income under the head “income from other sources” of which the assessee has claimed exemption u/ s 57.',
    },
    {
      id: 12,
      case:
        'Deduction has been claimed u/s 80QQB or 80RRB in respect of royalty from patent or books.',
    },
    {
      id: 13,
      case: 'Deduction has been claimed u/s 10AA or Part-C of Chapter VI-A.',
    },
    {
      id: 14,
      case:
        'If an individual is taxable in respect of an income but TDS for such income has been deducted by any other person(i.e., clubbing of income, Portuguese Civil Code, etc.).. 15.Assessee is Claiming relief of tax u/ s 90, 90A or 91.',
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
            <Breadcrumb.Item>Income Tax Return - 4</Breadcrumb.Item>
          </Breadcrumb>
          <Typography>
            <RegHeader
              title='Income Tax Return - 3'
              paraOne='Form is applicable For Individuals, HUFs and Firms (other than LLP) being a Resident having Total Income upto Rs.50 lakhs and having income from Business and Profession which is computed under sections 44AD, 44ADA or 44AE'
              paraTwo='This itr is Not for an Individual who is either Director in a company or has invested in Unlisted Equity Share'
              tagline='Get your ITR-4 filing @₹ 3,000 Only'
            />
            <Row gutter={24}>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    Due Date for Filing ITR-4 Online AY 2020-21
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    ITR-4 can be filed by a resident Indian or HUF or a resident
                    firm (other than LLP) if the total income comprises of any
                    of the following components:
                  </Paragraph>
                  <Title style={heading} level={2}>
                    Eligibility to file ITR-4
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    ITR-4 is filed by the taxpayers whose income is up to Rs 50
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
                    Ineligibility to file ITR-4
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    ITR-4 is filed by the taxpayers whose income is up to Rs 50
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

export default ItrFourComponent;
