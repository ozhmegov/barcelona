import React, { Component } from 'react';

export default class Schedule extends Component {
    render() {
        return (
            <div>
                { this.props.user.name }
                { this.props.page.year }
            </div>
        );
    }
}