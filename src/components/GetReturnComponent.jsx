import React from 'react';
import { useMedia } from 'react-media';
import {
  Layout,
  Typography,
  Row,
  Col,
  Space,
  Breadcrumb,
  Divider,
  Card,
} from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import RegHeader from './RegHeader';
import PricingComponent from './PricingComponent';
import TableComponent from './TableComponent';

const GstReturnComponent = () => {
  const columns = [
    {
      title: 'Type of GST Offencee',
      dataIndex: 'name',
      render: (text) => (
        <Paragraph strong style={{ color: '#1890ff' }}>
          {text}
        </Paragraph>
      ),
    },
    {
      title: 'Applicable GST Penalty Amount',
      dataIndex: 'description',
    },
    {
      title: 'Due Dates',
      dataIndex: 'duedates',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'GSTR - 1',
      description:
        'Outward return (Details about your sales/ Supplies made during month)',
      duedates: '10 th  of next month',
    },
    {
      key: '2',
      name: 'GSTR - 2',
      description:
        'Inward return (Details about your purchases made during month)',
      duedates: '15 th  of next month',
    },
    {
      key: '3',
      name: 'GSTR - 3',
      description:
        'Month return (for cumulative records of inward and outward made during month',
      duedates: '20 th  of next month',
    },
    {
      key: '4',
      name: 'GSTR - 4',
      description:
        'A return by Composite dealer (a person availing such service with supplies Rs. 50 lakh)',
      duedates: '18 th  of next quarter',
    },
    {
      key: '5',
      name: 'GSTR - 5',
      description: 'Monthly return by Non resident taxable person',
      duedates: '13 th  of next month',
    },
    {
      key: '6',
      name: 'GSTR - 6',
      description: 'Monthly return by input service distributor',
      duedates: '13 th  of next month',
    },
    {
      key: '7',
      name: 'GSTR - 7',
      description: 'Person who are required to deduct TDS',
      duedates: '10 th  of next month',
    },
    {
      key: '8',
      name: 'GSTR - 8',
      description: 'E-commerce market places who are required to deduct TDS',
      duedates: '18 th  of next quarter',
    },
    {
      key: '9',
      name: 'GSTR - 9',
      description: 'Annual Return',
      duedates: '30 th september of next financial year.',
    },
  ];

  const gstReturnCasesOne = [
    {
      id: 1,
      case: 'Taxpayers opting composition scheme (They must file GSTR-9A)',
    },
    { id: 2, case: 'Casual taxable person under GST' },
    { id: 3, case: 'Input service distributor' },
    { id: 4, case: 'Non resident taxable person under GST law explained' },
    { id: 5, case: 'Persons paying TDS under section 51 of CGST Act' },
  ];
  const gstReturnCasesTwo = [
    {
      id: 1,
      head: 'GSTR-9',
      case:
        'All entities having GST registration are required to file GST annual return in form GSTR- 9.',
    },
    {
      id: 2,
      head: 'GSTR-9A',
      case:
        'GST registered taxpayers who have opted for the GST Composition Scheme under Goods and Services Tax(GST) are required to file GSTR- 9A.',
    },
    {
      id: 3,
      head: 'GSTR-9C',
      case:
        'Form GSTR 9C is meant for filing the reconciliation statement of taxpayers pertaining to a particular financial year.The form is a statement of reconciliation between the Annual Returns in GSTR - 9and the figures mentioned in the Audited Financial Statements of the taxpayer. GSTR 9C is applicable to taxpayers who are required to obtain an annual GST audit of their accounts.GSTR - 9C must be prepared and certified by a Chartered Accountant or Cost Accountant.GST audit is applicable for person having GST registration with an annual aggregate turnover of above Rs. 2 crores',
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
          }}>
          <Breadcrumb style={{ marginBottom: '12px' }}>
            <Breadcrumb.Item>
              <Link to='/'>Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>GST Return Filing</Breadcrumb.Item>
          </Breadcrumb>
          <Typography>
            <RegHeader
              title='GST Return Filing'
              paraOne='A return is a document containing details of income which a taxpayer is required to file with the tax administrative authorities. This is used by tax authorities to calculate tax liability.'
              paraTwo='Under GST, a registered dealer has to file GST returns that include: Purchases, Sales, Output GST (On sales), Input tax credit (GST paid on purchases) To file GST returns, GST compliant sales and purchase invoices are required. You can generate GST compliant invoices for free on ClientFiling.'
              tagline='Get your Return Filing under GST @₹ 1,800 Only'
            />
            <PricingComponent />
            <Row>
              <Col span={24}>
                <TableComponent
                  title='What are the different types of GST Returns?'
                  para='Here is a list of all the returns to be filed as prescribed under the GST Law along with the due dates. As per the CGST Act subject to changes by CBIC Notifications'
                  columns={columns}
                  data={data}
                />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    Who should file GSTR-9, the annual return ?
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    All taxpayers/taxable persons registered under GST must file
                    their GSTR 9. However, the following are NOT required to
                    file GSTR 9:
                  </Paragraph>
                  {gstReturnCasesOne.map((cases) => (
                    <Space align='baseline' key={cases.id}>
                      <CheckCircleFilled
                        style={{
                          marginRight: '16px',
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
                  {gstReturnCasesTwo.map((cases) => (
                    <Card
                      key={cases.id}
                      style={{ fontFamily: 'Source Sans Pro' }}>
                      <Divider orientation='left'>{cases.head}</Divider>
                      <Paragraph
                        level={4}
                        style={matches.large ? subHading : ''}>
                        {cases.case}
                      </Paragraph>
                    </Card>
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

export default GstReturnComponent;
