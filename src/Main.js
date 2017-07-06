import React, { Component } from 'react';
import {Route, Switch} from "react-router";
import About from "./components/view/About";
import Team from "./components/view/Team";
import ScheduleContainer from "./components/containers/ScheduleContainer";

export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={About}/>
                    <Route path='/team' component={Team}/>
                    <Route path='/schedule' component={ScheduleContainer}/>
                    <Route component={About}/>
                </Switch>
            </main>
        );
    }
}