import React, {Component, Fragment} from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Event from "../pages/event";
import Contact from "../pages/contact";
import EventSingle from "../pages/eventSingle";
class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/event" component={Event}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/event/:eventId" component={EventSingle}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRouter;