import React from 'react';
import { Form, Input, Button, Card, Typography, Space } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

const FormComponent = ({ tagline }) => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const { Title } = Typography;
  return (
    <React.Fragment>
      <Card style={{ fontFamily: 'Source Sans Pro' }}>
        <Typography>
          <Title level={3}>{tagline}</Title>
        </Typography>
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{ remember: true }}
          onFinish={onFinish}>
          <Form.Item
            name='email'
            rules={[{ required: true, message: 'Please input your Email!' }]}>
            <Input
              type='email'
              prefix={<MailOutlined className='site-form-item-icon' />}
              placeholder='Email address'
            />
          </Form.Item>
          <Form.Item
            name='number'
            rules={[
              { required: true, message: 'Please input your Phone number!' },
            ]}>
            <Input
              prefix={
                <PhoneOutlined rotate='90' className='site-form-item-icon' />
              }
              type='number'
              placeholder='Phone number'
            />
          </Form.Item>

          <Form.Item>
            <Space direction='horizontal'>
              <Button
                type='primary'
                htmlType='submit'
                size='middle'
                className='login-form-button'>
                Buy now
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </React.Fragment>
  );
};

export default FormComponent;
