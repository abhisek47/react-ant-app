import React from 'react';
import { useMedia } from 'react-media';
import { Layout, Typography, Row, Col, Space, Breadcrumb } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import RegHeader from './RegHeader';

const ItrSevenComponent = () => {
  const eligibility = [
    { id: 1, case: 'Trusts,' },
    { id: 2, case: 'Political party' },
    { id: 3, case: 'Institutions' },
    { id: 4, case: 'Colleges' },
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
            <Breadcrumb.Item>Income Tax Return - 7</Breadcrumb.Item>
          </Breadcrumb>
          <Typography>
            <RegHeader
              title='Income Tax Return - 7'
              paraOne='For individuals and HUF with income from profits of a business or profession. ITR 3 is the form used by the individuals and Hindu Undivided Families who are registered as ‘Partners’ in a firm. . This is applicable for the professionals but in a partnership profession. The partner must be earning income in the form of interest, salary, bonus, commission, etc.'
              tagline='Get your ITR-7 filing @₹ 3,899 Only'
            />
            <Row gutter={24}>
              <Col span={matches.small ? 24 : 12}>
                <Space direction='vertical' style={{ marginTop: '24px' }}>
                  <Title style={heading} level={2}>
                    Eligibility to file ITR-7
                  </Title>
                  <Paragraph strong style={matches.large ? subHading : ''}>
                    ITR-7 is filed by the taxpayers whose income is up to Rs 50
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
            </Row>
          </Typography>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default ItrSevenComponent;
