import React, { Component } from 'react';

export default class Schedule extends Component {
    onUsernameBtnClick() {
        this.props.userActions.setUsername('Egor');
    }

    render() {
        return (
            <div>
                { this.props.user.name }
                { this.props.page.year }
                <button onClick={this.onUsernameBtnClick.bind(this)}>Set Name</button>
            </div>
        );
    }
}