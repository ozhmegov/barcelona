import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Schedule from "../view/Schedule";
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import axios from 'axios';

class ScheduleContainer extends Component {
    render() {
        return (
            <Schedule userReducer={this.props.userReducer}
                      page={this.props.page}
                      userActions={this.props.userActions}
                      usersState={this.props.usersState}
            />
        );
    }
}

function componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function(response){

        });
}

function mapStateToProps (store) {
    return {
        userReducer: store.userReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
        componentWillMount()
    )(ScheduleContainer)
)