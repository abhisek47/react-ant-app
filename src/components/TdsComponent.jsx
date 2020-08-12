import React from 'react';
import { useMedia } from 'react-media';
import { Layout, Typography, Row, Col, Space, Breadcrumb, Card } from 'antd';
import { Link } from 'react-router-dom';
import RegHeader from './RegHeader';
import { CheckCircleFilled } from '@ant-design/icons';
import PricingComponent from './PricingComponent';
import { tdsBasic, tdsStandard, tdsPremium } from './PricingDetails';
import TableComponent from './TableComponent';

const TdsComponent = () => {
  const columns = [
    {
      title: 'Quarter',
      dataIndex: 'name',
      render: (text) => (
        <Paragraph strong style={{ color: '#1890ff' }}>
          {text}
        </Paragraph>
      ),
    },
    {
      title: 'Quarter ends on',
      dataIndex: 'quarterend',
    },
    {
      title: 'Due date of TDS payment',
      dataIndex: 'duepayment',
    },
    {
      title: 'Due Date of TDS filing',
      dataIndex: 'duefiling',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'April to June',
      quarterend: '30th June',
      duepayment: '7th July',
      duefiling: '15th July',
    },
    {
      key: '2',
      name: 'July to September',
      quarterend: '30th September',
      duepayment: '7th October',
      duefiling: '15th October',
    },
    {
      key: '3',
      name: 'October to December',
      quarterend: '31st December',
      duepayment: '7th January',
      duefiling: '15th January',
    },
    {
      key: '4',
      name: 'January to March',
      quarterend: '31st March',
      duepayment: '7th May',
      duefiling: '15th May',
    },
  ];
  const tdsCases = [
    { id: 1, case: 'Form 24Q -TDS on Salaries' },
    { id: 2, case: 'Form 26Q – TDS on payments other than Salaries' },
    { id: 3, case: 'Form 27Q – TDS on payments made to Non-Residents' },
    { id: 4, case: 'Form 27EQ – TCS' },
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
            <Breadcrumb.Item>Tax Deducted At Source</Breadcrumb.Item>
          </Breadcrumb>
          <Typography>
            <RegHeader
              title='Tax Deducted At Source (TDS)'
              paraOne='a person (deductor) who is liable to make payment of specified nature to any other person (deductee) shall deduct tax at source and remit the same into the account of the Central Government. The deductee from whose income tax has been deducted at source would be entitled to get credit of the amount so deducted on the basis of Form 26AS or TDS certificate issued by the deductor.'
              tagline='Get your TDS Filing @₹ 1,499 Only'
            />
            <PricingComponent
              basic={tdsBasic}
              standard={tdsStandard}
              premium={tdsPremium}
              basicPrice='1499'
              standardPrice='2499'
              premiumPrice='4899'
            />
            <Row gutter={24}>
              <Col span={matches.small ? 24 : 16}>
                <TableComponent
                  title='Due dates for TDS return'
                  columns={columns}
                  data={data}
                />
              </Col>
              <Col span={matches.small ? 24 : 8}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    Different types of TDS forms are as follows
                  </Title>
                  {tdsCases.map((cases) => (
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
            <Row gutter={24}>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Card bordered={false}>
                    <Title level={4}>Who will file return</Title>
                    <Paragraph style={matches.large ? subHading : ''}>
                      It is the duty of the person who is making payment to
                      someone for specified goods or services to deduct TDS and
                      file TDS return. The specified payment includes salary,
                      interest, commission, brokerage, professional fees,
                      royalty, contract payments, etc. The person who deducts
                      TDS is called deductor and the person whose tax is being
                      deducted is called deductee. TDS is not required to be
                      deducted by Individuals and HUF except for those whose
                      accounts are required to be audited u/s 44AB i.e. whose
                      gross receipts in preceding financial year in case of
                      business is more than 2 crore (AY 2017-2018) or 1 crore (
                      AY 2016-2017) and in case of profession 50 lakhs ( AY
                      2017-2018) or 25 lakhs (AY 2016-2017).
                    </Paragraph>
                  </Card>
                </Space>
              </Col>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Card bordered={false}>
                    <Title level={4}>Late fine</Title>
                    <Paragraph style={matches.large ? subHading : ''}>
                      Late filing fees under section 234E As per section 234E,
                      where a person fails to file the TDS/TCS return on or
                      before the due date prescribed in this regard, then he
                      shall be liable to pay, by way of fee, a sum of Rs. 200
                      for every day during which the failure continues. The
                      amount of late fees shall not exceed the amount of TDS.
                      TDS/TCS return cannot be filed without payment of late
                      filing fees as discussed above. In other words, the late
                      filing fees shall be deposited before filing the TDS
                      return. It should be noted that Rs. 200 per day is not
                      penalty but it is a late filing fee.
                    </Paragraph>
                  </Card>
                </Space>
              </Col>
            </Row>
          </Typography>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default TdsComponent;
