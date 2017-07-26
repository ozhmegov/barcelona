import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as playerActions from '../actions/playerActions';
import Team from "../view/Team";
import * as configureStore from '../store/configureStore';

class TeamContainer extends Component {
    componentWillMount() {
        configureStore.getListPlayers();
    }

    render() {
        return (
            <Team playerReducer={this.props.playerReducer}
                  playerActions={this.props.playerActions}
                  configureStore={this.props.configureStore}
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
        configureStore: bindActionCreators(configureStore, dispatch)
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(TeamContainer)
)