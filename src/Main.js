import React, { Component } from 'react';
import {Route, Switch} from "react-router";
import About from "./view/About";
import ScheduleContainer from "./containers/ScheduleContainer";
import TeamContainer from "./containers/TeamContainer";
import AboutContainer from "./containers/AboutContainer";

export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={AboutContainer}/>
                    <Route path='/team' component={TeamContainer}/>
                    <Route path='/schedule' component={ScheduleContainer}/>
                    <Route component={About}/>
                </Switch>
            </main>
        );
    }
}