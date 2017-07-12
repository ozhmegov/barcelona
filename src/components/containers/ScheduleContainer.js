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
            <Schedule users={this.props.users}
                      page={this.props.page}
                      userActions={this.props.userActions}

            />
        );
    }
}

function componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(function(response){

        });
}

function mapStateToProps (store) {
    return {
        users: store.userReducer,
        page: store.page
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