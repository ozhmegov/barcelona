import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Schedule from "../view/Schedule";


class ScheduleContainer extends Component {
    render() {
        return (
            <Schedule user={this.props.user} page={this.props.page} />
        );
    }
}

function mapStateToProps (store) {
    return {
        user: store.user,
        page: store.page
    }
}

export default withRouter(connect(mapStateToProps)(ScheduleContainer))