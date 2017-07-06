import React, { Component } from 'react';

const { name } = this.props.user;
const { year, photos } = this.props.page;

export default class Schedule extends Component {
    render() {
        return (
            <div>
                <p>Привет, {name}!</p>
                <p>У тебя {photos.length} фото за {year} год</p>
            </div>
        );
    }
}