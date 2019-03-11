import React, { Component } from 'react';
import './single-column.scss';
class SingleColumn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }
    toggle() {
    }
    render() {
        return (
            <div className="column-container">
                <div className="container-header"><img src="http://client-cq.oss-cn-beijing.aliyuncs.com/js.jpg" alt="" /></div>
                <div className="container-info">
                   <div className="info-title">阿塔莉：战斗天使</div>
                   <div className="info-desc">很喜欢的电影</div>
                </div>
            </div>
        );
    }

}

export default SingleColumn;
