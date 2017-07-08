import React, { Component } from 'react';

export default class Schedule extends Component {
    addUser(){
        this.props.userActions.addUser({
            name: this.userNameInput.value,
            lastName: this.userLastNameInput.value
        });
        this.userNameInput.value = '';
        this.userLastNameInput.value = '';
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Name" ref={(input) => {this.userNameInput = input}}/>
                <input type="text" placeholder="Last Name" ref={(input) => {this.userLastNameInput = input}}/>
                <button onClick={this.addUser.bind(this)}>Add user</button>
                <ul>
                    {this.props.users.map((user, index) =>
                        <li key={index}>{user.name} {user.lastName}</li>
                    )}
                </ul>
            </div>
        );
    }
}