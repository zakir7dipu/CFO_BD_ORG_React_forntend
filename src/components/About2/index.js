import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import abimg4 from '../../assets/images/shape/shape2.png'
import VideoModal from "../ModalVideo";
import '../../assets/css/flaticon.css'
import axios from "../../axios-plugin";
class Index extends Component {
    constructor() {
        super();
        this.state = {
            basePath: process.env.React_App_Base_Url,
            sectionImage: '',
            thumb: '',
            title: '',
            discription1: '',
            discription2: ''
        }
    }

    componentDidMount() {
        axios.get(`/api/app/about-page`)
            .then(res => {
                this.setState({
                    thumbImage: res.data.thumbnail,
                    thumb: res.data.title,
                    title: res.data.title,
                    discription1: res.data.description_1,
                    discription2: res.data.description_2,
                    videoId: res.data.video_link,
                })
            }).catch(err => {
            console.log(err)
        });
    }

    render() {
        return (
            <div className="about-area section-padding">
                <Container>
                    <Row>
                        <Col lg={5} md={12} className="grid">
                            <div className="video-area">
                                <img src={this.state.basePath+this.state.thumbImage} alt="" />
                                <div className="entry-media video-holder video-btn2">
                                    <VideoModal video={this.state.videoId}/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} md={12} className="grid">
                            <div className="about-text">
                                <div className="section-title">
                                    <div className="thumb-text">
                                        <span>{this.state.thumb}</span>
                                    </div>
                                    <h2>{this.state.title}</h2>
                                </div>
                                <p dangerouslySetInnerHTML={{__html: this.state.discription1}}></p>
                            </div>
                        </Col>
                        <Col lg={12} md={12} className="grid">
                            <div className="about-text">
                                <p dangerouslySetInnerHTML={{__html: this.state.discription2}}></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="ab-shape">
                    <img src={abimg4} alt="" />
                </div>
            </div>
        );
    }
}

export default Index;