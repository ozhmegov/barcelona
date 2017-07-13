import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Schedule from "../view/Schedule";
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import axios from 'axios';

class ScheduleContainer extends Component {
    componentWillMount() {

            //{type: 'ADD_USER', payload: {id: 'ef', name: 'fff', lastName: 'vdc'}}

            /*axios.get('https://jsonplaceholder.typicode.com/users')
             .then(function(response){
             console.log(response.data);
             });*/
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