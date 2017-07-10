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

    deleteUser(){
        this.props.userActions.deleteUser(this.props);
    }


    render() {
        return (
            <div>
                <input type="text" placeholder="Name" ref={(input) => {this.userNameInput = input}}/>
                <input type="text" placeholder="Last Name" ref={(input) => {this.userLastNameInput = input}}/>
                <button onClick={this.addUser.bind(this)}>Add user</button>

                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.users.map((user, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.lastName}</td>
                                <td><button onClick={this.deleteUser.bind(this)}>Remove</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}