import React, { Component } from 'react';

export default class Schedule extends Component {
    addUser(){
        this.props.userActions.addUser({
            id: this.userIdInput.value,
            name: this.userNameInput.value,
            lastName: this.userLastNameInput.value
        });
        this.userIdInput.value = '';
        this.userNameInput.value = '';
        this.userLastNameInput.value = '';
    }

    deleteUser(id){
        this.props.userActions.deleteUser(id);
    }


    render() {
        return (
            <div>
                <input type="text" placeholder="Id" ref={(input) => {this.userIdInput = input}}/>
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
                        {this.props.users.users.map((user, index) =>
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.lastName}</td>
                                <td><button onClick={this.deleteUser.bind(this, user.id)}>Remove</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}