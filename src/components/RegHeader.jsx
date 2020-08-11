import React from 'react';
import FormComponent from './FormComponent';
import { useMedia } from 'react-media';
import { Row, Col, Space, Typography } from 'antd';

const RegHeader = ({ title, paraOne, paraTwo, tagline }) => {
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
      <Row gutter={16}>
        <Col span={matches.small ? 24 : 14}>
          <Space direction='vertical'>
            <Title style={heading} level={2}>
              {title}
            </Title>
            <Paragraph style={matches.large ? subHading : ''}>
              {paraOne}
            </Paragraph>
            <Paragraph style={matches.large ? subHading : ''}>
              {paraTwo}
            </Paragraph>
          </Space>
        </Col>
        <Col span={matches.small ? 24 : 10}>
          <FormComponent tagline={tagline} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default RegHeader;
