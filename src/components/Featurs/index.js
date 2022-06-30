import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import featuresimg from '../../assets/images/features/img-1.png'
import featuresimg2 from '../../assets/images/features/img-2.png'
import featuresimg3 from '../../assets/images/features/img-3.png'
import featuresimg4 from '../../assets/images/features/img-4.png'
import './style.css'
import {Link} from "react-router-dom";
import axios from "../../axios-plugin";

class Index extends Component {

    constructor() {
        super();

        this.state = {
            basePath: process.env.React_App_Base_Url,
            sectionTitle: '',
            sectionDescription: '',
            sectionImage: ''
        }
    }

    getData = () => {
        axios.get(`/api/app/goal-section`)
            .then(res => {
                this.setState({
                    sectionTitle: res.data.title,
                    sectionDescription: res.data.description,
                    sectionImage: res.data.image
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
            <div className="features-area">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={5} md={12} sm={12}>
                            <div className="features-text">
                                <div className="section-title">
                                    <div className="thumb-text">
                                        <span>{this.state.sectionTitle}</span>
                                    </div>
                                </div>
                                <div className="featureSectionDescription text-light" dangerouslySetInnerHTML={{__html: this.state.sectionDescription}}></div>
                                <a href="https://drive.google.com/file/d/19dQ6Db017AwmFMSL1JLeTD2HTyqU6FiJ/view?usp=sharing" target="_blank" className="theme-btn">Get membership form<i className="fa fa-angle-double-right"
                                                                               aria-hidden="true"></i></a>
                            </div>
                        </Col>

                        <Col lg={7} md={12} sm={12}>
                            <div className="features-wrap d-flex justify-content-center rounded">
                                <img src={this.state.basePath+this.state.sectionImage} alt=""/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Index;