import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './style.css'
import {Link} from "react-router-dom";
class Index extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <Fragment>
                <section className="page-title">
                    <div className="page-title-container">
                        <div className="page-title-wrapper">
                            <Container>
                                <Row>
                                    <Col>
                                        <h2>{this.props.pageTitle}</h2>
                                        <ol className="breadcrumb">
                                            <li><Link to="/">Home</Link></li>
                                            <li>{this.props.pagesub}</li>
                                        </ol>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Index;