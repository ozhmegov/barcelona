import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as playerActions from '../actions/playerActions';
import Team from "../view/Team";

class TeamContainer extends Component {
    componentWillMount() {
        playerActions.getListPlayers();
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
        playerReducer: store.playerReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        playerActions: bindActionCreators(playerActions, dispatch),
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(TeamContainer)
)