import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import abimg4 from '../../assets/images/shape/shape2.png'
import './style.css'
import axios from "../../axios-plugin";
import {Link} from "react-router-dom";

class Index extends Component {

    constructor() {
        super();
        this.state = {
            basePath: process.env.React_App_Base_Url,
            sectionImage: '',
            thumb: '',
            title: '',
            discription: ''
        }
    }

    getData = () => {
        axios.get(`/api/app/about`)
            .then(res => {
                this.setState({
                    sectionImage: res.data.image,
                    thumb: res.data.title,
                    title: res.data.title,
                    discription: res.data.description,
                })
            }).catch(err => {
            console.log(err)
        });
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div className="about-area">
                <Container>
                    <Row>
                        <Col lg={5} md={12} className="grid">
                            <div className="about-cercle">
                                <div className="about-img">
                                    <img src={this.state.basePath+this.state.sectionImage} alt="" />
                                </div>
                            </div>
                        </Col>

                        <Col lg={6} md={12} className="offset-lg-1 grid">
                            <div className="about-text">
                                <div className="section-title">
                                    <div className="thumb-text">
                                        <span>{this.state.thumb}</span>
                                    </div>
                                    {/*<h2>{this.state.title}</h2>*/}
                                </div>
                                <div className="aboutSectionDescription" dangerouslySetInnerHTML={{__html: this.state.discription}}></div>
                                <Link to="/about"><small className="text-black"><b>See More >></b></small></Link>
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