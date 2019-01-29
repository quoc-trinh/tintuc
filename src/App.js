import React from "react";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import "./App.css"
import "antd/dist/antd.css";
import { Layout, Menu, Icon, Affix, Drawer, Button } from 'antd';
import ListNewsCard from './components/ListNewsCard';
import { getAllPayItems } from './common/APIUtils';

const { Header, Content } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'tonghop',
      data: null,
      loading: true,
      visible: false,
      screenWidth: null
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }



  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ screenWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions());

    getAllPayItems("").then((response) => {
      this.setState({ data: response.data, loading: false })
    })

  }


  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({ loading: true });

    if (e.key === "tonghop") {
      getAllPayItems("").then((response) => {
        this.setState({ data: response.data, current: e.key, loading: false });
      })
    } else {
      getAllPayItems(e.key).then((response) => {
        this.setState({ data: response.data, current: e.key, loading: false });
      })
    }

  }

  buildMenu = (type) => {
    return <Menu
      onClick={this.handleClick}
      selectedKeys={[this.state.current]}
      mode={type}
      style={{ lineHeight: '64px', margin: 'auto', width: '75%' }}
    >
      <Menu.Item key="tonghop">
        <Icon type="mail" />Tổng hợp
        </Menu.Item>
      <Menu.Item key="ne">
        <Icon type="appstore" />Thời sự
        </Menu.Item>
      <Menu.Item key="sp">
        <Icon type="appstore" />Thể thao
        </Menu.Item>
      <Menu.Item key="en">
        <Icon type="appstore" />Giải trí
        </Menu.Item>
      <Menu.Item key="ar">
        <Icon type="appstore" />Nghệ thuật
        </Menu.Item>
      <Menu.Item key="fo">
        <Icon type="appstore" />Ẩm thực
        </Menu.Item>
      <Menu.Item key="he">
        <Icon type="appstore" />Sức khỏe
        </Menu.Item>
      <Menu.Item key="bu">
        <Icon type="dollar" />Kinh doanh
        </Menu.Item>
      <Menu.Item key="te">
        <Icon type="appstore" />Công nghệ
        </Menu.Item>
      <Menu.Item key="mo">
        <Icon type="appstore" />Ôtô
        </Menu.Item>
      <Menu.Item key="tr">
        <Icon type="appstore" />Du lịch
        </Menu.Item>
      <Menu.Item key="li">
        <Icon type="appstore" />Đời sống
        </Menu.Item>
    </Menu>
  }

  render() {
    console.log(this.state.screenWidth);
    return (
      <Layout>
        <Header style={{ background: 'white' }}>
          <div className="logo"><img src={'http://2.bp.blogspot.com/--a1hQmVeYLQ/WcABKIqndiI/AAAAAAAASOk/E-fWVFeh2xomut57gjYDD9vlI7eUjzklwCK4BGAYYCw/s1600/Untitled.png'} /></div>
        </Header>
        <Content style={{ padding: '0 10px', background: 'white' }}>

          {this.state.screenWidth && this.state.screenWidth < 1468 ? <Affix offsetTop={30}><div><Icon
            className="trigger"
            type={this.state.collapsed ? 'menu-unfold' : 'bars'}
            onClick={this.showDrawer}
            title={"Chọn đây"}
            style={{ width: "80px" }}
            size={72}
          ><span>{"Chọn đây"}</span></Icon>
            <Drawer
              placement="left"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              {this.buildMenu("vertical")}
            </Drawer>
          </div></Affix> : <Affix offsetTop={0}>{this.buildMenu("horizontal")}</Affix>}


          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {this.state.loading ? <div style={{ textAlign: 'center' }}><Icon type="sync" spin style={{ margin: 'auto' }} /></div> : <ListNewsCard data={this.state.data} />}
          </div>
        </Content>
      </Layout>
    );
  }
}


export default App;
