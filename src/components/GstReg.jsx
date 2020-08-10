import React from 'react';
import { useMedia } from 'react-media';
import { Layout, Typography, Row, Col, Space } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';

const GstReg = () => {
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
  const document = [
    { id: 1, case: 'PAN card and document scan copy' },
    { id: 2, case: 'Tradelicence, incorporation deed, partnership deed' },
    {
      id: 3,
      case:
        'Adress proof like electric bill, telephone bil, rent Agreement, property document etc',
    },
    { id: 4, case: 'Others like-noc, authorisation letter, bank statement' },
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
  return (
    <React.Fragment>
      <Layout style={{ background: '#fff' }}>
        <Typography>
          <Space direction='vertical'>
            <Title style={heading} level={2}>
              GST Registration
            </Title>
            <Paragraph style={matches.large ? subHading : ''}>
              GST Number (GSTIN) is a unique 15 digit number which is allotted
              to the assessee at the time of filing an application for
              registration for Goods &amp; Service Tax.
            </Paragraph>
            <Paragraph style={matches.large ? subHading : ''}>
              As per the GST law, every person (including company, LLP etc) has
              to register under GST if the total turnover crosses Rs.40 lakh
              (Rs.20 lakh in case of north eastern states). Hence, if your
              turnover is more than 40 lakh or is going to be more than 20 lakh,
              then it is advised that you should go for GST registration.
            </Paragraph>
          </Space>
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
                        marginRight: '16px',
                        color: '#52c41a',
                      }}
                    />
                    <Paragraph level={4} style={matches.large ? subHading : ''}>
                      {cases.case}
                    </Paragraph>
                  </Space>
                ))}
              </Space>
            </Col>
            <Col span={matches.small ? 24 : 12}>
              <Space direction='vertical' style={{ marginTop: '24px' }}>
                <Title style={heading} level={2}>
                  Documents Required for GST Registration.
                </Title>
                <Paragraph strong style={matches.large ? subHading : ''}>
                  In below required documents is mandatory .
                </Paragraph>
                {document.map((cases) => (
                  <Space align='baseline' key={cases.id}>
                    <CheckCircleFilled
                      style={{
                        marginRight: '16px',
                        color: '#52c41a',
                      }}
                    />
                    <Paragraph level={4} style={matches.large ? subHading : ''}>
                      {cases.case}
                    </Paragraph>
                  </Space>
                ))}
              </Space>
            </Col>
          </Row>
        </Typography>
      </Layout>
    </React.Fragment>
  );
};

export default GstReg;
