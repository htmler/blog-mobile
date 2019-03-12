import React, { Component } from 'react';
import './technique.scss';
import { Layout } from 'antd';
import { server } from '../../providers/http-servide';
import NavBar from '../../components/navBar/nav-bar';
import SlideBar from '../../components/slide/slideBar'
import SingleColumn from '../../components/singleColumn/single-column';
import DefaultBox from '../../components/defaultBox/default-box';
import { withRouter } from 'react-router-dom';
const {
    Header, Content
} = Layout;
class Technique extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            isModal: false,
            type: 'hc'
        };
    }
    componentWillMount() {
        let params = {
            tag: this.state.type
        };
        server.getFileList(params).then(obj => {
            this.setState({
                arr: obj,
            })
        })
    }
    componentDidMount() {
    }
    toggle() {
        let bodyEle = document.getElementsByTagName('body')[0]
        if (this.state.isModal) {
            bodyEle.style.overflow = ''
        } else {
            bodyEle.style.overflow = 'hidden'
        }
        this.setState({
            isModal: this.state.isModal === true ? false : true
        })
    }
    getType(data) {
        let bodyEle = document.getElementsByTagName('body')[0]
        bodyEle.style.overflow = ''
        this.setState({
            type: data
        })
        let params = {
            tag: data
        };
        server.getFileList(params).then(obj => {
            this.setState({
                arr: obj,
            })
        })
        this.setState({
            isModal: false
        })
    }
    render() {
        return (
            <Layout className="container-body">
                <Header className="body-header">
                    <div className="header-left" onClick={() => { this.toggle() }}>三</div>
                    <div className="header-center">技术帖--{this.state.type}</div>
                    <div className="header-right"></div>
                </Header>
                <Content className="body-content">
                    <div className="column-body">
                        {this.state.arr.length > 0 ? (this.state.arr.map((element, index) => {
                            return <SingleColumn key={index} item={element} />
                        })) : <DefaultBox /> }
                    </div>
                </Content>
                <NavBar type="technique" />
                <div className={`${this.state.isModal ? 'mask' : ''}`} onClick={() => { this.toggle() }}></div>
                <div className={`slide-box ${this.state.isModal ? 'slide-active' : ''}`}>
                    <SlideBar emit={this.getType.bind(this)} />
                </div>
            </Layout>
        );
    }

}

export default withRouter(Technique);
