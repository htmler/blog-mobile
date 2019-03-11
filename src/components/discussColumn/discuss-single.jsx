import React, { Component } from 'react';
import './discuss-single.scss';
class DiscussSingle extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }
    render() {
        return (
            <div className="discuss-single-container">
                <div className="container-left">
                  <img src="http://client-cq.oss-cn-beijing.aliyuncs.com/avatar.jpg" alt=""/>
                </div>
                <div className="container-right">
                   <div className="right-top">
                      <span className="top-name">system</span>
                      <span className="top-time">2019/03/05 10:39:24</span>
                   </div>
                   <div className="right-content">
                      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                   </div>
                </div>
            </div>
        );
    }

}

export default DiscussSingle;
