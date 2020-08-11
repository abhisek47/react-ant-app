import React from 'react';
import { Space, Table, Typography } from 'antd';
import { useMedia } from 'react-media';

const TableComponent = ({ columns, data, title, para }) => {
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
      <Space direction='vertical' style={{ marginTop: '24px', width: '100%' }}>
        <Title style={heading} level={2}>
          {title}
        </Title>
        <Paragraph style={matches.large ? subHading : ''}>{para}</Paragraph>
        <Table
          style={{ fontFamily: 'Source Sans Pro' }}
          columns={columns}
          dataSource={data}
          bordered
          footer={() =>
            '*The list is indicative and penalties are subject to periodic change.'
          }
        />
      </Space>
    </React.Fragment>
  );
};

export default TableComponent;
