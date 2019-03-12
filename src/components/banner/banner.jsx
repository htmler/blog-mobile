import React, { Component } from 'react';
import { Carousel } from 'antd';
import './banner.scss';
class Banner extends Component {
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
            <div className="banner-container">
                <Carousel className="container-swiper" autoplay effect="fade">
                {this.props.num.map((element,index) =>{
                    return <div key={index} className="swiper-li"><img src={element.imageUrl} alt=""/>
                      <div className="li-info">
                          <div className='info-title'>{element.title}</div>
                      </div>
                    </div>
                })}
                </Carousel>
            </div>
        );
    }

}

export default Banner;
