import React from 'react';
import Media from 'react-media';
import { Layout, Tabs } from 'antd';

const { Content } = Layout;
const { TabPane } = Tabs;
const item = [
  { id: 1, head: 'GST Registration', component: <GstReg /> },
  { id: 2, head: 'GST Return Filing', component: <GstReturn /> },
];

class TabComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    };
  }

  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  };
  render() {
    return (
      <React.Fragment>
        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px) and (max-width: 1199px)',
            large: '(min-width: 1200px)',
          }}>
          {(matches) => (
            <Layout
              className='layout'
              style={{ background: '#fff', padding: '24px 0' }}>
              <Content
                style={{
                  padding: matches.large ? '10px 50px' : '5px 30px',
                }}>
                <div>
                  <Tabs
                    defaultActiveKey='1'
                    tabPosition={matches.large ? 'left' : 'top'}
                    style={{ height: '100%' }}>
                    {item.map((items) => (
                      <TabPane
                        tab={items.head}
                        key={items.id}
                        disabled={items.id === 10}>
                        {items.component}
                      </TabPane>
                    ))}
                  </Tabs>
                </div>
              </Content>
            </Layout>
          )}
        </Media>
      </React.Fragment>
    );
  }
}

export default TabComponent;
