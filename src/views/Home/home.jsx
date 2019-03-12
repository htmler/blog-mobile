import React, { Component } from 'react';
import {server} from '../../providers/http-servide';
import { Layout } from 'antd';
import './home.scss';
import Banner from '../../components/banner/banner'
import SingleColumn from '../../components/singleColumn/single-column'
import NavBar from '../../components/navBar/nav-bar'
import { withRouter } from 'react-router-dom';
import { element } from 'prop-types';
const {
  Header, Content,
} = Layout;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr:[],
      columnObj:[]
    };
  }
  componentWillMount(){
    server.getHomeBanner().then(obj=>{
      this.setState({
        arr:obj
      })
    })
    let params = {
      tag: 'frame'
    };
    server.getHomeList(params).then(obj => {
      console.log(obj)
      this.setState({
        columnObj:obj
      })
    });
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
          <div className="header-right"></div>
        </Header>
        <Content className="body-content">
          <Banner num = {this.state.arr}/>
          <div className="column-body">
             {this.state.columnObj.map((element,index) =>{
               return <SingleColumn key={index} item={element}/>
             })}
          </div>
        </Content>
        <NavBar type="home"/>
      </Layout>
    );
  }

}

export default withRouter(Home);
