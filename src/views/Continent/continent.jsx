import React, { Component } from 'react';
import './continent.scss';
import NavBar from '../../components/navBar/nav-bar'
import SingleColumn from '../../components/singleColumn/single-column'
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import {server} from '../../providers/http-servide';
const {
    Header,Content
} = Layout;
class Continent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[],
            type:'continent'
        };
    }
    componentWillMount() {
        let params = {
            tag: this.state.type
          };
        server.getFileList(params).then(obj =>{
            this.setState({
                arr:obj,
            })
        })
    }
    componentDidMount() {
    }
    toggle() {
    }
    render() {
        return (
            <div>
                <Layout className="container-body">
                    <Header className="body-header">
                        <div className="header-left" onClick={() => { this.toggle() }}></div>
                        <div className="header-center">小酒馆</div>
                        <div className="header-right"></div>
                    </Header>
                    <Content className="body-content">
                    <div className="column-body">
                        {this.state.arr.map((element, index) => {
                            return <SingleColumn key={index} item={element}/>
                        })}
                    </div>
                </Content>
                    <NavBar type="continent" />
                </Layout>
            </div>
        );
    }

}

export default withRouter(Continent);
