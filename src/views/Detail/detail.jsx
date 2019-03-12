import React, { Component } from 'react';
import './detail.scss';
import { Layout, Icon } from 'antd';
import {server} from '../../providers/http-servide';
import marked from 'marked';
const {
    Header, Content
} = Layout;
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataObj: {},
            content:''
        };
    }
    componentWillMount() {
       console.log(this.props.match.params);
       server.editFile(this.props.match.params).then(obj =>{
           this.setState({
               dataObj:obj,
               content: marked(obj.content)  
           })
       })
    }
    componentDidMount() {
    }
    goBack() {
        window.history.go(-1);
    }
    render() {
        return (
            <div className="detail-container">
                <Layout className="container-body">
                    <Header className="body-header">
                        <div className="header-left" onClick={() => { this.goBack() }}><Icon type="left" /></div>
                        <div className="header-center">{this.state.dataObj.title}</div>
                        <div className="header-right"></div>
                    </Header>
                    <Content className="body-content">
                        <div className="content-header">
                            <img src={this.state.dataObj.imageUrl} alt="" />
                            <div className="header-list"><span className="list-name">root</span><span className="list-line">|</span><span className="list-time">2019-03-02</span>
                              <span className="list-type">
                            
                              </span>
                            </div>
                        </div>
                        <div className="content-info">
                           <div className="info-show" dangerouslySetInnerHTML={{__html:this.state.content}}></div>
                           <div className="info-end">The End</div>
                        </div>
                    </Content>
                </Layout>
            </div>
        );
    }

}

export default Detail;
