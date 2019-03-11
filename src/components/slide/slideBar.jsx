import React, { Component } from 'react';
import './slideBar.scss';
import { element } from 'prop-types';
class SlideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navIndex:'hc',
            technique:[
                {
                    name:'HTML+CSS',
                    type:'hc'
                },
                {
                    name:'JavaScript',
                    type:'js'
                },
                {
                    name:'前端框架',
                    type:'frame'
                },
                {
                    name:'NodeJS',
                    type:'node'
                },
                {
                    name:'其他',
                    type:'other'
                },
            ]
        };
    }

    componentDidMount() {
    }
    changeNav(type){
        this.setState({
            navIndex:type
        })
        this.props.emit(type)
    }
    render() {
        return (
            <div className="slide-container">
                {this.state.technique.map((element,index) =>{
                    return <div onClick={()=>{this.changeNav(element.type)}} className={`container-li ${this.state.navIndex == element.type ? 'container-active' : ''}`} key={index}>{element.name}</div>
                })}
            </div>
        );
    }

}

export default SlideBar;
