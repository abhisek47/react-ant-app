import React from 'react';
import { useMedia } from 'react-media';
import { Layout, Typography, Breadcrumb } from 'antd';
// import { CheckCircleFilled, ExclamationCircleFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import RegHeader from './RegHeader';

const CompanyComponent = () => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 767px)',
    medium: '(min-width: 768px) and (max-width: 1199px)',
    large: '(min-width: 1200px)',
  };
  // const heading = {
  //   fontWeight: '500',
  //   textAlign: 'left',
  //   fontFamily: 'Alegreya Sans',
  // };
  // const subHading = {
  //   fontWeight: '600',
  //   fontSize: '16px',
  //   fontFamily: 'Source Sans Pro',
  // };
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  // const { Title, Paragraph } = Typography;
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
            <Breadcrumb.Item>Private Limited Company</Breadcrumb.Item>
          </Breadcrumb>
          <Typography>
            <RegHeader
              title='Private Limited Company'
              paraOne='In a limited company, the liability of members or subscribers of the company is limited to what they have invested or guaranteed to the company. Limited companies may be limited by shares or by guarantee. The former may be further divided in public companies and private companies.'
              tagline='Get your Company Registered @₹ 23,600/ Annualy'
            />
          </Typography>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default CompanyComponent;
