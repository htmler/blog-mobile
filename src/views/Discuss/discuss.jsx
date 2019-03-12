import React, { Component } from 'react';
import './discuss.scss';
import NavBar from '../../components/navBar/nav-bar'
import DiscussSingle from '../../components/discussColumn/discuss-single'
import { withRouter } from 'react-router-dom';
import {server} from '../../providers/http-servide';
import { Layout, Modal, Input, Button, Icon } from 'antd';
const {
    Header, Content
} = Layout;
const { TextArea } = Input;
class Discuss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            visible: false
        };
    }
    componentWillMount() {
        server.getDiscussList().then(obj =>{
            this.setState({
                arr:obj,
            })
        })
    }
    componentDidMount() {
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    toggle() {
        this.setState({
            visible: true,
        });
    }
    render() {
        return (
            <Layout className="container-body">
                <Header className="body-header">
                    <div className="header-left"></div>
                    <div className="header-center">讨论</div>
                    <div className="header-right" onClick={() => { this.toggle() }}><Icon type="plus" /></div>
                </Header>
                <Content className="body-content">
                    <div className="content-box">
                        <div className="box-time">
                            <div className="time-year">welcome</div>
                            <div className="time-date">吐槽</div></div>
                        <div className="box-right">
                            {this.state.arr.map((element, index) => {
                                return <div key={index} className="right-list">
                                    <DiscussSingle item={element}/>
                                </div>
                            })}
                        </div>
                    </div>
                </Content>
                <NavBar type="discuss" />
                <Modal
                    title="发起讨论"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>返回</Button>,
                        <Button key="submit" type="primary" onClick={this.handleOk}>
                          确定
                        </Button>,
                      ]}
                >
                    <p>
                        <TextArea rows={4} />
                    </p>
                </Modal>
            </Layout>
        );
    }

}

export default withRouter(Discuss);
