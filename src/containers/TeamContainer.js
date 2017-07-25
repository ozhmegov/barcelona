import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as playerActions from '../actions/playerActions';
import axios from 'axios';
import Team from "../view/Team";

class TeamContainer extends Component {
    componentWillMount() {
        axios.get('http://localhost:8080/getPlayers')
            .then(function (response) {
                console.log(response.data);
            })
    }

    render() {
        return (
            <Team playerReducer={this.props.playerReducer}
                  playerActions={this.props.playerActions}
            />
        );
    }
}

function mapStateToProps (store) {
    return {
        playerReducer: store.playerReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        playerActions: bindActionCreators(playerActions, dispatch)
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(TeamContainer)
)