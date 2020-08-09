import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import MenuComponent from './MenuComponent';
import { useMedia } from 'react-media';

const DrawerComponent = () => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 767px)',
    medium: '(min-width: 768px) and (max-width: 1199px)',
    large: '(min-width: 1200px)',
  };
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button
        type='primary'
        onClick={showDrawer}
        style={{ float: 'right', margin: '16px 0' }}>
        <MenuOutlined />
      </Button>
      <Drawer
        width={matches.medium ? '80%' : '100%'}
        title={<Button type='primary'>Log In</Button>}
        placement='right'
        closable={true}
        onClose={onClose}
        visible={visible}>
        <MenuComponent />
      </Drawer>
    </>
  );
};

export default DrawerComponent;
