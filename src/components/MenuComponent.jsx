import React from 'react';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  DatabaseOutlined,
  AppstoreAddOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

class MenuComponent extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(
      (key) => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    return (
      <Menu
        mode='inline'
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: '100%' }}>
        <SubMenu
          key='sub1'
          title={
            <span>
              <MailOutlined />
              <span>Company</span>
            </span>
          }>
          <Menu.Item key='1'>
            <Link to='/'>Company Registration</Link>
          </Menu.Item>
          <Menu.Item key='2'>Proprietorship Firm Registration</Menu.Item>
          <Menu.Item key='3'>Unregistered Partnership</Menu.Item>
          <Menu.Item key='4'>Registered Partnership</Menu.Item>
          <Menu.Item key='5'>Limited Limited Proprietorship (LLP)</Menu.Item>
          <Menu.Item key='6'>Import Export Code</Menu.Item>
          <Menu.Item key='7'>ISO Registration</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' icon={<AppstoreOutlined />} title='Property'>
          <Menu.Item key='8'>Trademark Registration</Menu.Item>
          <Menu.Item key='9'>Trademark Objection</Menu.Item>
          <Menu.Item key='10'>Trademark Renewal</Menu.Item>
          <Menu.Item key='11'>Copyright Registration</Menu.Item>
        </SubMenu>
        <SubMenu key='sub3' icon={<SettingOutlined />} title='Tax-Filing'>
          <Menu.Item key='12'>
            <Link to='/gst'>GST Registration</Link>
          </Menu.Item>
          <Menu.Item key='13'>
            <Link to='/gst-return'>GST Return - 1</Link>
          </Menu.Item>
          <Menu.Item key='14'>
            <Link to='/gst-return'>GST Return - 3B</Link>
          </Menu.Item>
          <Menu.Item key='15'>
            <Link to='/gst-return'>GST Return - 4</Link>
          </Menu.Item>
          <Menu.Item key='16'>
            <Link to='/gst-return'>GST Return - 9</Link>
          </Menu.Item>
          <Menu.Item key='17'>Income Tax Return - 1</Menu.Item>
          <Menu.Item key='18'>Income Tax Return - 2</Menu.Item>
          <Menu.Item key='19'>Income Tax Return - 3</Menu.Item>
          <Menu.Item key='20'>Income Tax Return - 4</Menu.Item>
          <Menu.Item key='21'>Income Tax Return - 5</Menu.Item>
          <Menu.Item key='22'>Income Tax Return - 6</Menu.Item>
          <Menu.Item key='23'>Income Tax Return - 7</Menu.Item>
          <Menu.Item key='24'>TDS Return</Menu.Item>
          <Menu.Item key='25'>Excise Return</Menu.Item>
        </SubMenu>
        <SubMenu key='sub4' icon={<DatabaseOutlined />} title='Compliances'>
          <Menu.Item key='26'>Private Limited Company</Menu.Item>
          <Menu.Item key='27'>LLP Annual Compliances</Menu.Item>
          <Menu.Item key='29'>PF Registration</Menu.Item>
          <Menu.Item key='30'>PF Return Registration</Menu.Item>
          <Menu.Item key='31'>ESI Registration</Menu.Item>
          <Menu.Item key='32'>ESI Return Registration</Menu.Item>
          <Menu.Item key='33'>PAN Application</Menu.Item>
          <Menu.Item key='34'>TAN Application</Menu.Item>
          <Menu.Item key='35'>80G Registration</Menu.Item>
        </SubMenu>
        <SubMenu key='sub5' icon={<AppstoreAddOutlined />} title='Resources'>
          <Menu.Item key='36'>Terms And Conditions</Menu.Item>
          <Menu.Item key='37'>Privacy Policy</Menu.Item>
          <Menu.Item key='38'>Declimar Policy</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default MenuComponent;
