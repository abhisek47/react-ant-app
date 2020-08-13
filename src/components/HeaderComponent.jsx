import React from 'react';
import { Layout, Menu, Button, Typography } from 'antd';
import CascaderComponent from './CascaderComponent';
import DrawerComponent from './DrawerComponent';
import { useMedia } from 'react-media';
import { PhoneOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 767px)',
    medium: '(min-width: 768px) and (max-width: 1199px)',
    large: '(min-width: 1200px)',
  };
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  const { Header } = Layout;
  const { Paragraph } = Typography;
  return (
    <React.Fragment>
      <Layout style={{ fontFamily: 'Source Sans Pro' }}>
        <Header
          style={{
            zIndex: 1,
            width: '100%',
            padding: matches.large ? '0 50px' : '0 30px',
          }}>
          <Link to='/'>
            <Paragraph strong style={{ fontSize: '18px' }} className='logo'>
              Client Filing India
            </Paragraph>
          </Link>
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
            {matches.large && (
              <>
                <CascaderComponent key='1' />
                <Button
                  type='primary'
                  style={{
                    width: 100,
                    float: 'right',
                    margin: '16px',
                  }}>
                  Log In
                </Button>
                <a href='tel:+91-983-294-9193'>
                  <Button
                    type='primary'
                    icon={<PhoneOutlined rotate={90} />}
                    style={{
                      float: 'right',
                      margin: '16px',
                      width: 'auto',
                    }}>
                    +91-983-294-9193
                  </Button>
                </a>
              </>
            )}
            {matches.large ? '' : <DrawerComponent />}
          </Menu>
        </Header>
      </Layout>
    </React.Fragment>
  );
};

export default HeaderComponent;
