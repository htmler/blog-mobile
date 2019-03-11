import React, { Component } from 'react';
import { Layout } from 'antd';
import './home.scss';
import Banner from '../../components/banner/banner'
import SingleColumn from '../../components/singleColumn/single-column'
import NavBar from '../../components/navBar/nav-bar'
import { withRouter } from 'react-router-dom';
import { element } from 'prop-types';
const {
  Header, Footer, Content,
} = Layout;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr:[1,2,3,4,5,6,7]
    };
  }

  componentDidMount() {
  }
  toggle() {
  }
  render() {
    return (
      <Layout className="container-body">
        <Header className="body-header">
          <div className="header-left" onClick={() => { this.toggle() }}></div>
          <div className="header-center">CQshare</div>
          <div className="header-right">aa</div>
        </Header>
        <Content className="body-content">
          <Banner />
          <div className="column-body">
             {this.state.arr.map((element,index) =>{
               return <SingleColumn key={index}/>
             })}
          </div>
        </Content>
        <Footer>Footer</Footer>
        <NavBar type="home"/>
      </Layout>
    );
  }

}

export default withRouter(Home);
