import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Schedule from "../view/Schedule";

class ScheduleContainer extends Component {

    render() {
        return (
            <Schedule/>
        );
    }
}


export default withRouter(
    connect(
    )(ScheduleContainer)
)
