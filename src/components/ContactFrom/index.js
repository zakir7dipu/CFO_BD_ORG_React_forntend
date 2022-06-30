import React, { Component } from 'react'
import {Col, Row} from "react-bootstrap";
import axios from "../../axios-plugin";
import Swal from "sweetalert2";


class ContactForm extends Component {


    state = {
        name: '',
        email: '',
        subject: '',
        lastname: '',
        events: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            subject,
            lastname,
            events,
            notes, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (subject === '') {
            error.subject = "Please enter your subject";
        }
        if (lastname === '') {
            error.lastname = "Please enter your Lastname";
        }
        if (events === '') {
            error.events = "Select your event list";
        }
        if (notes === '') {
            error.notes = "Please enter your note";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.lastname === '' && error.subject === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                subject: '',
                events: '',
                notes: '',
                error: {}
            })
        } else {
            this.sendMessage()
        }
    }

    sendMessage () {
        axios.post("/api/app/contact-message",this.state)
            .then(res=>{
                if(res.data.status === 201) {
                    Swal.fire(
                        'Good job!',
                        res.data.message,
                        'success'
                    )
                } else {
                    Swal.fire(
                        'Error!',
                        res.data,
                        'error'
                    )
                }
            })
            .catch(err=>console.log(err))
    }

    render(){
        const { name,
            email,
            subject,
            lastname,
            error } = this.state;

        return(
            <form onSubmit={this.subimtHandler} className="form">
                <Row>
                    <Col lg={6} md={6}>
                        <div className="form-field">
                            <input value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Name"/>
                            <p>{error.name ? error.name : ''}</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className="form-field">
                            <input value={lastname} onChange={this.changeHandler} type="text" name="lastname" placeholder="Lastname"/>
                            <p>{error.lastname ? error.lastname : ''}</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Email"/>
                            <p>{error.email ? error.email : ''}</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={subject} type="text" name="subject" placeholder="Subject"/>
                            <p>{error.subject ? error.subject : ''}</p>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="form-field">
                            <textarea onChange={this.changeHandler} name="notes" placeholder="Message"></textarea>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="form-submit">
                            <button type="submit" className="theme-btn">Send Message</button>
                        </div>
                    </Col>
                </Row>
            </form>
        )
    }

}
export default  ContactForm;