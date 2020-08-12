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
import { CheckCircleFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import RegHeader from './RegHeader';
import TableComponent from './TableComponent';

const GstComponent = () => {
  const GstDocument = [
    { id: 1, case: 'PAN card and document scan copy' },
    { id: 2, case: 'Tradelicence, incorporation deed, partnership deed' },
    {
      id: 3,
      case:
        'Adress proof like electric bill, telephone bil, rent Agreement, property document etc',
    },
    { id: 4, case: 'Others like-noc, authorisation letter, bank statement' },
  ];

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
      dataIndex: 'address',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Delayed filing of GST Returns',
      address:
        'Rs. 50 per day (Rs.25 per day under CGST and an additional Rs. 25 per day under SGST) up to a maximum of Rs. 5000.',
    },
    {
      key: '2',
      name: 'Not filing GST Returns',
      address: 'Higher amount among  – Rs. 10,000 or 10% of tax due under GST',
    },
    {
      key: '3',
      name: 'Committing Fraud',
      address:
        'Higher amount among – Rs. 10,000 or 100% of tax due under GST (mayinclude jail term for fraud cases of higher value)',
    },
    {
      key: '4',
      name: 'Aiding and Abetting Fraud',
      address:
        'Rs. 25,000 irrespective of whether offender is GST registered or not',
    },
    {
      key: '5',
      name: 'Charging wrong GST rates (higherrate than actual)',
      address:
        'Higher amount among – Rs. 10,000 or 100% of the tax amount due(applicable only if excess tax is not submitted with the government)',
    },
    {
      key: '6',
      name: 'Not issuing an invoice',
      address: 'Higher amount among – Rs. 10,000 or 100% of tax amount due',
    },
    {
      key: '7',
      name: 'Not Registering Under GST (even though required to by law)',
      address: 'Higher amount among – Rs. 10,000 or 100% of tax amount due',
    },
    {
      key: '8',
      name: 'Issuing incorrect invoice',
      address: 'Rs. 25,000',
    },
  ];
  const gstCases = [
    { id: 1, case: 'Export sales or services' },
    { id: 2, case: 'Selling on E-commerce sites' },
    { id: 3, case: 'Reverse Charge' },
    { id: 4, case: 'Inter State Supply(sale outside state)' },
    { id: 5, case: 'Casual Taxable Person' },
    { id: 6, case: 'Non resident taxable person' },
    { id: 7, case: 'Input Service Distributor' },
    { id: 7, case: 'Crossing the Threshold(40lacs or 20 lacs' },
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
            <Breadcrumb.Item>GST Registration</Breadcrumb.Item>
          </Breadcrumb>
          <Typography>
            <RegHeader
              title='GST Registration'
              paraOne='GST Number (GSTIN) is a unique 15 digit number which is allotted
              to the assessee at the time of filing an application for
              registration for Goods &amp; Service Tax.'
              paraTwo='As per the GST law, every person (including company, LLP etc) has
              to register under GST if the total turnover crosses Rs.40 lakh
              (Rs.20 lakh in case of north eastern states). Hence, if your
              turnover is more than 40 lakh or is going to be more than 20 lakh,
              then it is advised that you should go for GST registration.'
              tagline='Get your business registered under GST @₹ 1,800 Only'
            />
            <Row gutter={16}>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    When GST Registration is mandatory ?
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    In below all cases registration is mandatory .
                  </Paragraph>
                  {gstCases.map((cases) => (
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
                    Documents Required for GST Registration
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    In below all the documents is required
                  </Paragraph>
                  <Row>
                    <Timeline
                      style={{ display: 'flex', flexDirection: 'column' }}>
                      {GstDocument.map((cases) => (
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
            <TableComponent
              title='GST Penalties under the GST Act'
              para='GST Penalties resulting from breach of the GST Act, 2017 are subject to fines depending on various factors including but not limited to the severity of the breach. The following are the applicable penaltiesunder the act for some key offences*:'
              columns={columns}
              data={data}
            />
          </Typography>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default GstComponent;
