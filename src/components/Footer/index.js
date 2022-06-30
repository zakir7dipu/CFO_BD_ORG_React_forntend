import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

import './style.css'
import {Link} from "react-router-dom";
import axios from "../../axios-plugin";
class Index extends Component {

    constructor(props) {
        super();
    }

    ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    componentDidMount() {
        axios.get(`/api/app/social-links`)
            .then(res => {
                this.setState({
                    socialLinks: res.data
                })
            }).catch(err => {
            console.log(err)
        });
    }

    goToSocialLinks = (e) => {
        window.open(this.state.socialLinks[e], "_blank");
    }

    render() {
        return (
            <footer className="tp-site-footer">
                <div className="tp-upper-footer">
                    <Container>
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                                <div className="widget about-widget">
                                    <div className="footer-logo widget-title">
                                        <Link onClick={this.ClickHandler} to="/"><img src={this.props.logo} alt="logo"/></Link>
                                    </div>
                                    {/*<p></p>*/}
                                    <ul>
                                        <li><Link onClick={(e)=>{
                                            e.preventDefault()
                                        this.goToSocialLinks('facebook')
                                    }} to="#"><i className="ti-facebook"></i></Link></li>
                                        <li><Link onClick={(e)=>{
                                            e.preventDefault()
                                        this.goToSocialLinks('linkedin')
                                    }} to="#"><i className="ti-linkedin"></i></Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><Link onClick={this.ClickHandler} to="/about">About</Link></li>
                                        <li><Link onClick={this.ClickHandler} to="/event">Events</Link></li>
                                        <li><Link onClick={this.ClickHandler} to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12} className="col-lg-offset-1">
                                <div className="widget market-widget tp-service-link-widget">
                                    <div className="widget-title">
                                        <h3>Contact </h3>
                                    </div>
                                    <div className="contact-ft">
                                        <ul>
                                            <li><i className="fi flaticon-pin"></i>{this.props.address}</li>
                                            <li><i className="fi flaticon-call"></i>{this.props.phone}</li>
                                            <li><i className="fi flaticon-envelope"></i>{this.props.email}</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="tp-lower-footer">

                </div>
            </footer>
        );
    }
}

export default Index;