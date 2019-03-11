import React, { Component } from 'react';
import './continent.scss';
import NavBar from '../../components/navBar/nav-bar'
import SingleColumn from '../../components/singleColumn/single-column'
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
const {
    Header,Content
} = Layout;
class Continent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[1,2,3,4,5,6,7],
        };
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
                        <div className="header-right">aa</div>
                    </Header>
                    <Content className="body-content">
                    <div className="column-body">
                        {this.state.arr.map((element, index) => {
                            return <SingleColumn key={index} />
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
