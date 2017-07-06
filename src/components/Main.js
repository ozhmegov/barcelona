import React, { Component } from 'react';
import {Route, Switch} from "react-router";
import About from "./About";
import Team from "./Team";
import Schedule from "./Schedule";

export default class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={About}/>
                    <Route path='/team' component={Team}/>
                    <Route path='/schedule' component={Schedule}/>
                    <Route component={About}/>
                </Switch>
            </main>
        );
    }
}