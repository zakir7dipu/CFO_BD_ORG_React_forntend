import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ContactForm from "../ContactFrom";
import "./style.css"

class Index extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <section className="contact-pg-contact-section section-padding">
                <Container>
                    <Row>
                        <Col lg={6} md={12}>
                            <div className="section-title-s3 section-title-s5">
                                <h2>Our Contacts</h2>
                            </div>
                            <div className="contact-details">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="ti-location-pin"></i>
                                        </div>
                                        <h5>Our Location</h5>
                                        <p>{this.props.address}</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="ti-mobile"></i>
                                        </div>
                                        <h5>Phone</h5>
                                        <p>{this.props.phone}</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="ti-email"></i>
                                        </div>
                                        <h5>Email</h5>
                                        <p>{this.props.email}</p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className="contact-form-area">
                                <div className="section-title-s3 section-title-s5">
                                    <h2>Quick Contact Form</h2>
                                </div>
                                <div className="contact-form">
                                    <ContactForm/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Index;