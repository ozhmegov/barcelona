import React, { Component } from 'react';

export default class UserTable extends Component {

    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                // Здесь будут отображаться все пользователи
                </tbody>
            </table>
        );
    }
}