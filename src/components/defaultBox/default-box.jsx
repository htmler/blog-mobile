import React, { Component } from 'react';
import './default-box.scss';
class DefaultBox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }
    render() {
        return (
            <div className="default-box">
                <div className="box-img">
                    <img src={require('../../assets/images/nodata.png')} alt="" />
                </div>
            </div>
        );
    }

}

export default DefaultBox;
