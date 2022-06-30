import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import './style.css'
import axios from "../../axios-plugin";
class Index extends Component {

    constructor() {
        super();
        this.state = {
            basePath: process.env.React_App_Base_Url,
            events: []
        }
    }

    componentDidMount() {
        axios.get(`/api/app/all-events`)
            .then(res => {
                this.setState({
                    events: res.data
                })
            }).catch(err => {
            console.log(err)
        });
    }

    render() {
        return (
            <div className="case-area section-padding">
                <Container>
                    <Col lg={6} className="offset-lg-3">
                        <div className="section-title section-title2 text-center">
                            <div className="thumb-text">
                                <span>EVENTS</span>
                            </div>
                            <h2>Our Running Events</h2>
                        </div>
                    </Col>
                    <Row>
                        {
                            this.state.events.map(item => {
                                return(
                                    <Col lg={4} md={6} key={item.id}>
                                        <div className="cause-item">
                                            <div className="cause-top">
                                                <div className="cause-img">
                                                    <img src={this.state.basePath+item.img} alt="" />
                                                    <div className="case-btn">
                                                        <Link to={'/event/'+item.id} className="theme-btn">View<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cause-text">
                                                <h3><Link to={'/event/'+item.id}>{item.title}</Link></h3>
                                                {/*<p>{item.sub_title}</p>*/}
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </Container>
            </div>
        );
    }
}

export default Index;