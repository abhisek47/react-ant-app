import React from 'react';
import { useMedia } from 'react-media';
import { Typography, Space, Timeline } from 'antd';

const DocumentComponent = ({ title, subtitle }) => {
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
      <Space direction='vertical' style={{ marginTop: '24px' }}>
        <Title style={heading} level={2}>
          {title}
        </Title>
        <Paragraph strong style={matches.large ? subHading : ''}>
          {subtitle}
        </Paragraph>
        <Timeline style={{ display: 'flex', flexDirection: 'column' }}>
          {document.map((cases) => (
            <Space align='baseline' key={cases.id}>
              <Timeline.Item style={{ padding: ' 5px 0', margin: '0' }}>
                <Paragraph level={4} style={matches.large ? subHading : ''}>
                  {cases.case}
                </Paragraph>
              </Timeline.Item>
            </Space>
          ))}
        </Timeline>
      </Space>
    </React.Fragment>
  );
};

export default DocumentComponent;
