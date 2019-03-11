import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.scss';
import { element } from 'prop-types';
import { Icon } from 'antd';
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navIndex: this.props.type,
            navBar: [
                {
                    name: '首页',
                    type: 'home',
                    icon: 'home',
                },
                {
                    name: '技术帖',
                    type: 'technique',
                    icon: 'tool'
                },
                {
                    name: '小酒馆',
                    type: 'continent',
                    icon: 'coffee'
                },
                {
                    name: '讨论',
                    type: 'discuss',
                    icon: 'message'
                },
            ]
        };
    }

    componentDidMount() {
    }
    render() {
        return (
            <div className="nav-container">
                <div className="container-nav">
                    {this.state.navBar.map((element, index) => {
                        return <Link className="nav-link" to={`/${element.type}`} key={index}>
                            <div className={`nav-li ${this.state.navIndex == element.type ? 'nav-active' : ''}`}>
                                <div className="li-top"><Icon className="top-icon" type={element.icon} /></div>
                                <div className="li-show">{element.name}</div>
                            </div>
                        </Link>
                    })}
                </div>
            </div>
        );
    }

}

export default NavBar;
