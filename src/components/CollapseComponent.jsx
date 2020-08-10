import React from 'react';
import { Layout, Row, Col, Typography, Collapse } from 'antd';
import { useMedia } from 'react-media';
import { CaretRightOutlined } from '@ant-design/icons';

const CollapseComponent = () => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 767px)',
    medium: '(min-width: 768px) and (max-width: 1199px)',
    large: '(min-width: 1200px)',
  };
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  const { Content } = Layout;
  const { Title } = Typography;
  const { Panel } = Collapse;
  const tab1 = [
    {
      id: 1,
      title: 'How to get a company registered ?',
      details:
        'Picking the right company structure for your business is as important as any other business-related activity. The right business structure will allow your enterprise to operate efficiently and meet your required business targets. In India, every business must register themselves as part of the mandatory legal compliance. Before we learn how to register a company, let’s try and understand the types of business structures in India.',
    },
    {
      id: 2,
      title: 'What is trademark registration ?',
      details:
        'A trademark is a type of intellectual property consisting of a recognizable sign, design, or expression which identifies products or services of a particular source from those of others, although trademarks used to identify services are usually called service marks.',
    },
    {
      id: 3,
      title: 'What is import export code registration ?',
      details:
        'In this age of cut- throat competition, everyone wants to grow their business beyond the limits of the domestic market.However, doing business globally isn’t just a cup of tea for everyone.Before going global, you need to follow several procedures and laws in place and get different registration and license.IEC(Import Export Code) license is one of such prerequisite when you’re thinking of importing or exporting from India.',
    },
  ];
  const tab2 = [
    {
      id: 1,
      title: 'How to register provident fund ?',
      details:
        'The Government of India will pay the employer and employee contribution to EPF account of employees for another three months from June to August 2020. The benefit is for establishments with up to 100 employees and where 90% of those employees draw a salary of less than Rs 15,000 per month. The contribution to EPF is reduced to 10% from 12% for non-government organisations.',
    },
    {
      id: 2,
      title: 'What Exactly is ISO Certified ? And Why Does it Matter ?',
      details:
        'SO certification certifies that a management system, manufacturing process, service, or documentation procedure has all the requirements for standardization and quality assurance. ISO (International Organization for Standardization) is an independent, non-governmental, international organization that develops standards to ensure the quality, safety, and efficiency of products, services, and systems.',
    },
    {
      id: 3,
      title: 'What is ESI registration ?',
      details:
        'ESI stands for Employee State Insurance managed by the Employee State Insurance Corporation which is an autonomous body created by the law under the Ministry of Labour and Employment, Government of India. This scheme is started for Indian workers.The workers are provided with a huge variety of medical, monetary and other benefits from the employer.Any Company having more than 10 employees(in some states it is 20 employees) who have a maximum salary of Rs. 15000/- has to mandatorily register itself with the ESIC.',
    },
  ];
  return (
    <React.Fragment>
      <Layout
        className='layout'
        style={{ background: '#fff', padding: '24px 0' }}>
        <Content
          style={{
            padding: matches.large ? '10px 50px' : '5px 30px',
            textAlign: matches.large ? 'left' : 'center',
            fontFamily: 'Source Sans Pro',
          }}>
          <Typography>
            <Title
              level={2}
              style={{
                fontWeight: '500',
                textAlign: 'left',
                fontFamily: 'Alegreya Sans',
              }}>
              Frequently Asked Questions
            </Title>
          </Typography>
          <Row gutter={16}>
            <Col span={matches.small ? 24 : 12}>
              <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
                className='site-collapse-custom-collapse'>
                {tab1.map((tab) => (
                  <Panel
                    header={tab.title}
                    key={tab.id}
                    className='site-collapse-custom-panel'>
                    <p>{tab.details}</p>
                  </Panel>
                ))}
              </Collapse>
            </Col>
            <Col span={matches.small ? 24 : 12}>
              <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
                className='site-collapse-custom-collapse'>
                {tab2.map((tab) => (
                  <Panel
                    header={tab.title}
                    key={tab.id}
                    className='site-collapse-custom-panel'>
                    <p>{tab.details}</p>
                  </Panel>
                ))}
              </Collapse>
            </Col>
          </Row>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default CollapseComponent;
