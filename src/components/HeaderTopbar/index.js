import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/custom.css'
import './style.css'
import {Link} from "react-router-dom";
import axios from "../../axios-plugin";

class Index extends Component {
    constructor(props) {
        super();
        this.state = {
            socialLinks: ''
        }
    }

    componentDidMount() {
        axios.get(`/api/app/social-links`)
            .then(res => {
                this.setState({
                    socialLinks: res.data
                })
            })
            .catch(err => {
                console.log(err)
            });
    }

    goToSocialLinks = (e) => {
        window.open(this.state.socialLinks[e], "_blank");
    }

    render() {
        return (
            <div className="topbar">
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="contact-intro">
                                <ul>
                                    <li><i className="fi flaticon-call"></i>{this.props.phone}</li>
                                    <li><i className="fi flaticon-envelope"></i> {this.props.email}</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className="contact-intro float-lg-end">
                                <ul>
                                    <li><Link className="topNavSocialIcon" onClick={(e)=>{
                                        e.preventDefault()
                                        this.goToSocialLinks('facebook')
                                    }} to="#"><i className="ti-facebook"></i></Link></li>

                                    <li><Link className="topNavSocialIcon" onClick={(e)=>{
                                        e.preventDefault()
                                        this.goToSocialLinks('linkedin')
                                    }} to="#"><i className="ti-linkedin"></i></Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Index;