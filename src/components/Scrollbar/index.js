import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "./style.css"
import {Link} from "react-router-dom";

class Index extends Component {

    goTop = (e) => {
        e.preventDefault()
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <div className="header-menu">
                                <ul className="smothscroll">
                                    <li><Link onClick={this.goTop} to='#scrool'><i className="fa fa-arrow-up"></i></Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Index;