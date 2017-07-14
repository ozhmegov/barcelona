import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Schedule from "../view/Schedule";
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import getUsers from '../store/configureStore';

class ScheduleContainer extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount() {
        getUsers();
    }

    render() {
        return (
            <Schedule userReducer={this.props.userReducer}
                      userActions={this.props.userActions}
            />
        );
    }
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
        mapDispatchToProps
    )(ScheduleContainer)
)