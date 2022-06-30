import React, {Component, Fragment} from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Featurs";
import EventSection from "../components/Events";
import Footer from "../components/Footer";
import Scrollbar from "../components/Scrollbar";
import axios from "../axios-plugin";

class Home extends Component {

    constructor(props) {
        super();
        this.state = {
            basePath: process.env.React_App_Base_Url,
            logo: '',
            address: '',
            phone: '',
            email: ''
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
                    email: res.data.email,
                })
            }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <Fragment>
                <title>CFO | Home</title>
                <Navbar logo={this.state.basePath+this.state.logo} phone={this.state.phone} email={this.state.email}/>
                <Hero/>
                <About/>
                <Features/>
                <EventSection/>
                {/*<Partner/>*/}
                <Footer logo={this.state.basePath+this.state.logo} address={this.state.address} phone={this.state.phone} email={this.state.email}/>
                <Scrollbar/>
            </Fragment>
        );
    }
}

export default Home;