import React from "react";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import "./App.css"
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from 'antd';
import ListNewsCard from './ListNewsCard';
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">News</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 10px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}><ListNewsCard /></div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2019 Created by Jbohnvn
    </Footer>
      </Layout>
    );
  }
}


export default App;
