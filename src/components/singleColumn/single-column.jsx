import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <Link className="column-link" to={`/detail/${this.props.item._id}`}>
                <div className="column-container">
                    <div className="container-header"><img src={this.props.item.imageUrl} alt="" /></div>
                    <div className="container-info">
                        <div className="info-title">{this.props.item.title}</div>
                        <div className="info-desc">{this.props.item.desc}</div>
                    </div>
                </div>
            </Link>
        );
    }

}

export default SingleColumn;
