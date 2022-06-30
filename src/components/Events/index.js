import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './style.css'
import {Link} from "react-router-dom";
import axios from "../../axios-plugin";
class Index extends Component {

    allMonth = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    constructor() {
        super();
        this.state = {
            basePath: process.env.React_App_Base_Url,
            events: []
        }
    }

    componentDidMount() {
        axios.get(`/api/app/events`)
            .then(res => {
                this.setState({events: res.data})
            }).catch(err => {
            console.log(err)
        })
    }

    dateParser = (value) => {
        let date = new Date(value);
        return {
            day: date.getDate() < 10 ? '0'+date.getDate():date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear()
        }
    }

    render() {
        return (
            <div className="event-area section-padding">
                <Container>
                    <Row>
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-title section-title2 text-center">
                                <div className="thumb-text">
                                    <span>EVENTS</span>
                                </div>
                                <h2>Our Running Events</h2>

                            </div>
                        </div>
                    </Row>

                    <Row>
                        <Col>
                            {
                                this.state.events.map(item => {
                                    return(
                                        <div className="event-item" key={item.id}>
                                            <div className="event-img">
                                                <img className={`img img-fluid`} src={this.state.basePath+item.img} alt=""  style={{ height: '120px' }}/>
                                            </div>
                                            <div className="event-text">
                                                <div className="event-left">
                                                    <div className="event-l-text">
                                                        <span>{this.allMonth[this.dateParser(item.start_at).month]}</span>
                                                        <h4>{this.dateParser(item.start_at).day}</h4>
                                                        <span>{this.dateParser(item.start_at).year}</span>
                                                    </div>
                                                </div>
                                                <div className="event-right">
                                                    <ul>
                                                        <li><i className="ti-location-pin"></i> {item.location}</li>
                                                    </ul>
                                                    <h2><Link to="/">{item.title}.</Link></h2>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Index;