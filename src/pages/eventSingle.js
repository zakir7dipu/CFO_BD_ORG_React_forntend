import React, {Component, Fragment} from 'react';
import Navbar from "../components/Navbar";
import PageTitle from "../components/Pagetitle";
import EventDetails from "../components/EventSingle/index";
import Footer from "../components/Footer";
import Scrollbar from "../components/Scrollbar";
import axios from "../axios-plugin";

class ProjectSingle extends Component {
    constructor(props) {
        super();
        this.state = {
            basePath: process.env.React_App_Base_Url,
            logo: '',
            address: '',
            phone: '',
            email: '',
            event:{}
        }
    }

    componentDidMount() {
        axios.get(`/api/app/event/${this.props.match.params.eventId}`)
            .then(res => {
                // console.log(res.data.event)
                this.setState({
                    logo: res.data.logo,
                    address: res.data.address,
                    phone: res.data.phone,
                    email: res.data.email,
                    event: res.data.event,
                })
            }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <Fragment>
                <title>CFO | {this.state.event.title}</title>

                <Navbar logo={this.state.basePath+this.state.logo} phone={this.state.phone} email={this.state.email}/>
                <PageTitle pageTitle={this.state.event.title} pagesub={'All Events'}/>
                <EventDetails event={this.state.event}/>
                <Footer logo={this.state.basePath+this.state.logo} address={this.state.address} phone={this.state.phone} email={this.state.email} socialMedia={this.state.socialMedia}/>
                <Scrollbar/>
            </Fragment>
        );
    }
}

export default ProjectSingle;