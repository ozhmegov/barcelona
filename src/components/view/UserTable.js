import React, { Component } from 'react';

export default class UserTable extends Component {

    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Last Name</th>
                </tr>
                </thead>
                <tbody>
                // Здесь будут отображаться все пользователи
                </tbody>
            </table>
        );
    }
}