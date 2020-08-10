import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import { useMedia } from 'react-media';

const FooterComponent = () => {
  const footerHead = [
    {
      id: 1,
      title: 'Head Office',
      sub1: 'Kolkata, West Bengal',
      sub2: '36/A Kadapara, Kankurgachi, Kolkata-700054',
    },
    {
      id: 2,
      title: 'Andhra Pradesh Branch',
      sub1: 'Andhra Pradesh',
      sub2: '9th Phase, Rama Nilayam Road, Andhrapradesh-500072',
    },
    {
      id: 3,
      title: 'Gangtok Branch',
      sub1: 'Gangtok',
      sub2:
        'Below Supermarket (turning) M.G. Road , Gangtok, East Sikkim-737101.',
    },
    {
      id: 4,
      title: 'Siliguri Branch',
      sub1: 'Siliguri',
      sub2: 'Ward 8 , Khalpara , Siliguri - 734005',
    },
  ];
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 767px)',
    medium: '(min-width: 768px) and (max-width: 1199px)',
    large: '(min-width: 1200px)',
  };
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  const { Footer } = Layout;
  const { Paragraph, Text } = Typography;
  return (
    <React.Fragment>
      <Layout>
        <Footer
          style={{
            zIndex: 1,
            width: '100%',
            padding: matches.large ? '0 50px' : '0 30px',
            background: 'rgba(0,21,41,.95)',
            fontFamily: 'Source Sans Pro',
          }}>
          <Row gutter={16} style={{ margin: '26px 0' }}>
            {footerHead.map((footer) => (
              <Col
                span={matches.small ? 24 : 6}
                style={{ marginTop: '26px' }}
                key={footer.id}>
                <Typography>
                  <Paragraph strong level={4} style={{ color: '#fff' }}>
                    {footer.title}
                  </Paragraph>
                  <Paragraph style={{ color: 'lightgrey' }}>
                    {footer.sub1}
                  </Paragraph>
                  <Paragraph style={{ color: 'lightgrey' }}>
                    {footer.sub2}
                  </Paragraph>
                </Typography>
              </Col>
            ))}
          </Row>
        </Footer>
        <Footer
          style={{
            background: 'rgb(0,21,41)',
            fontFamily: 'Source Sans Pro',
            textAlign: 'center',
          }}>
          <Row justify='center'>
            <Typography>
              <Text style={{ color: 'lightgrey' }}>
                copyright @ 2020 cilentfilingindia. all rights reserved
              </Text>
            </Typography>
          </Row>
        </Footer>
      </Layout>
    </React.Fragment>
  );
};

export default FooterComponent;
