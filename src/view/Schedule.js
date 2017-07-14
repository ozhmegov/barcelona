import React, { Component } from 'react';

export default class Schedule extends Component {
    addUser(){
        this.props.userActions.addUser({
            id: this.idInput.value,
            userId: this.userIdInput.value,
            title: this.userTitleInput.value
        });
        this.idInput.value = '';
        this.userIdInput.value = '';
        this.userTitleInput.value = '';
    }

    deleteUser(id){
        this.props.userActions.deleteUser(id);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Id" ref={(input) => {this.idInput = input}}/>
                <input type="text" placeholder="UserId" ref={(input) => {this.userIdInput = input}}/>
                <input type="text" placeholder="Title" ref={(input) => {this.userTitleInput = input}}/>
                <button onClick={this.addUser.bind(this)}>Add user</button>

                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.userReducer.users.map((user, index) =>
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td><button onClick={this.deleteUser.bind(this, user.id)}>Remove</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}