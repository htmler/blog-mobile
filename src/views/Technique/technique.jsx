import React, { Component } from 'react';
import './technique.scss';
import { Layout } from 'antd';
import NavBar from '../../components/navBar/nav-bar';
import SlideBar from '../../components/slide/slideBar'
import SingleColumn from '../../components/singleColumn/single-column'
import { withRouter } from 'react-router-dom';
const {
    Header,Content
} = Layout;
class Technique extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[1,2,3,4,5,6,7],
            isModal: false,
        };
    }

    componentDidMount() {
    }
    toggle() {
        this.setState({
            isModal: this.state.isModal === true ? false : true
        })
    }
    getType(data) {
        console.log(data);
    }
    render() {
        return (
            <Layout className="container-body">
                <Header className="body-header">
                    <div className="header-left" onClick={() => { this.toggle() }}>三</div>
                    <div className="header-center">技术帖</div>
                    <div className="header-right">aa</div>
                </Header>
                <Content className="body-content">
                    <div className="column-body">
                        {this.state.arr.map((element, index) => {
                            return <SingleColumn key={index} />
                        })}
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
