import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import About from "../view/About";

class AboutContainer extends Component {

    render() {
        return (
            <About/>
        );
    }
}


export default withRouter(
    connect(
    )(AboutContainer)
)