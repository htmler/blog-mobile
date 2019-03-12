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
                  <img src={this.props.item.avatar} alt=""/>
                </div>
                <div className="container-right">
                   <div className="right-top">
                      <span className="top-name">{this.props.item.username}</span>
                      <span className="top-time">{this.props.item.createTime}</span>
                   </div>
                   <div className="right-content">
                      {this.props.item.content}
                   </div>
                </div>
            </div>
        );
    }

}

export default DiscussSingle;
