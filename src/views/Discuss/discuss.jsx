import React, { Component } from 'react';
import './discuss.scss';
import NavBar from '../../components/navBar/nav-bar'
import DiscussSingle from '../../components/discussColumn/discuss-single'
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
const {
    Header, Content
} = Layout;
class Discuss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                1, 2, 3, 4, 5, 6
            ]
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
                    <div className="header-center">讨论</div>
                    <div className="header-right">+</div>
                </Header>
                <Content className="body-content">
                    <div className="content-box">
                        <div className="box-time">
                            <div className="time-year">welcome</div>
                            <div className="time-date">吐槽</div></div>
                        <div className="box-right">
                            {this.state.arr.map((element, index) => {
                                return <div className="right-list">
                                   <DiscussSingle />
                                </div>
                            })}
                        </div>
                    </div>
                </Content>
                <NavBar type="discuss" />
            </Layout>
        );
    }

}

export default withRouter(Discuss);
