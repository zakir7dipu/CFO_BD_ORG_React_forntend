import React, { Component } from "react";
import Slider from "react-slick";

import './style.css'
import axios from "../../axios-plugin";


class Partner extends Component {

    constructor() {
        super();

        this.state = {
            basePath: process.env.React_App_Base_Url,
            partners: []
        }
    }

    componentDidMount() {
        axios.get(`/api/app/partner`)
            .then(res => {
                this.setState({partners: res.data})
            }).catch(err => {
                console.log(err)
        })
    }

    render() {
        var settings = {
            dots: false,
            arrows: false,
            speed: 1200,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade:false,
            
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };

        return (
            <section className="partners-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="partner-grids partners-slider">
                            <Slider {...settings}>
                                {this.state.partners.map(item => {
                                    return(
                                        <div className="grid" key={item.id}>
                                            <img src={`${this.state.basePath}/${item.image}`} alt="" className="img-thumbnail"/>
                                        </div>
                                    )
                                })}

                            </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Partner;