import React from 'react';
import { Layout, Menu, Button } from 'antd';
import CascaderComponent from './CascaderComponent';
import DrawerComponent from './DrawerComponent';
import { useMedia } from 'react-media';

const HeaderComponent = () => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 767px)',
    medium: '(min-width: 768px) and (max-width: 1199px)',
    large: '(min-width: 1200px)',
  };
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  const { Header } = Layout;
  return (
    <React.Fragment>
      <Layout>
        <Header
          style={{
            zIndex: 1,
            width: '100%',
            padding: matches.large ? '0 50px' : '0 30px',
          }}>
          <div className='logo' />
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
