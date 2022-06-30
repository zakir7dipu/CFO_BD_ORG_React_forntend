import React, {Component, Fragment} from 'react';
import Navbar from "../components/Navbar";
import PageTitle from "../components/Pagetitle"
import AboutSection from "../components/About2"
import Footer from "../components/Footer";
import Scrollbar from "../components/Scrollbar";
import axios from "../axios-plugin";
class About extends Component {

    constructor(props) {
        super();
        this.state = {
            basePath: process.env.React_App_Base_Url,
            logo: '',
            about: '',
            address: '',
            phone: '',
            email: '',
            bannerImage: ''
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        axios.get(`/api/app/base-info`)
            .then(res => {
                this.setState({
                    logo: res.data.logo,
                    address: res.data.address,
                    phone: res.data.phone,
                    email: res.data.email
                })
            }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <Fragment>
                <title>CFO | About Us</title>
                <Navbar logo={this.state.basePath+this.state.logo} phone={this.state.phone} email={this.state.email}/>
                <PageTitle pageTitle={'About Us'} pagesub={'About'} banner_image={this.state.bannerImage}/>
                <AboutSection/>
                <Footer logo={this.state.basePath+this.state.logo} address={this.state.address} phone={this.state.phone} email={this.state.email}/>
                <Scrollbar/>
            </Fragment>
        );
    }
}

export default About;