import React, {Component, Fragment} from 'react';
import {Button, Col, Container} from "react-bootstrap";
import {AiTwotoneCalendar} from "@react-icons/all-files/ai/AiTwotoneCalendar";
import {ImLocation2} from "@react-icons/all-files/im/ImLocation2";

class Index extends Component {

    constructor(props) {
        super();

        this.state = {
            basePath: process.env.React_App_Base_Url,
            title: '',
            img: '',
            location: '',
            end_at: '',
            start_at: '',
            btn_label: '',
            btn_link: '',
            description: '',
        }
    }

    componentDidMount() {
        this.setState({
            title: this.props.event.title,
            img: this.props.event.img,
            location: this.props.event.location,
            end_at: this.props.event.end_at,
            start_at: this.props.event.start_at,
            btn_label: this.props.event.btn_label,
            btn_link: this.props.event.btn_link,
            description: this.props.event.description,
        })
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.event.id !== prevProps.event.id) {
            this.setState({
                title: this.props.event.title,
                img: this.props.event.img,
                location: this.props.event.location,
                end_at: this.props.event.end_at,
                start_at: this.props.event.start_at,
                btn_label: this.props.event.btn_label,
                btn_link: this.props.event.btn_link,
                description: this.props.event.description,
            })
        }
    }

    dateParser = (value) => {
        let date = new Date(value);
        return {
            day: date.getDate() < 10 ? '0'+date.getDate():date.getDate(),
            month: parseInt(date.getMonth()+1) < 10 ? "0"+parseInt(date.getMonth()+1):date.getMonth()+1,
            year: date.getFullYear()
        }
    }

    render() {
        return (
            <Fragment>
                <div className="case-area section-padding" >
                    <Container>
                        <Col lg={10} className={`mx-auto`}>
                            <h3>{this.state.title}</h3>
                            <img src={this.state.basePath+this.state.img} alt=""/>
                            <p className="p-3">
                                <span className="d-block"><AiTwotoneCalendar/> {this.dateParser(this.state.start_at).day+'-'+this.dateParser(this.state.start_at).month+'-'+this.dateParser(this.state.start_at).year}
                                    {this.state.end_at?' To '+(this.dateParser(this.state.end_at).day+'-'+this.dateParser(this.state.end_at).month+'-'+this.dateParser(this.state.end_at).year):''} </span>
                                <span className="d-block"><ImLocation2/> {this.state.location}</span>
                            </p>

                            <p className="p-3" dangerouslySetInnerHTML={{__html: this.state.description}}></p>
                        </Col>
                        { this.state.btn_label?
                            <Col lg={12} className="text-center">
                                <a href={this.state.btn_link} target="_blank">
                                    <Button className={'btn-info'}>{this.state.btn_label}</Button>
                                </a>
                            </Col>:""
                        }


                    </Container>
                </div>
            </Fragment>
        );
        // this.projectDetailsView()
    }
}

export default Index;