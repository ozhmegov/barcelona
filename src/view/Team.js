import React, { Component } from 'react';

export default class Team extends Component {
    addPlayer(){
        this.props.configureStore.addPlayer({
            name: this.nameInput.value,
            lastName: this.lastNameInput.value,
            number: this.numberInput.value,
            role: this.roleInput.value
        });
        this.nameInput.value = '';
        this.lastNameInput.value = '';
        this.numberInput.value = '';
        this.roleInput.value = '';
    }

    deletePlayer(id){
        this.props.playerActions.deletePlayer(id);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Name" ref={(input) => {this.nameInput = input}}/>
                <input type="text" placeholder="Last Name" ref={(input) => {this.lastNameInput = input}}/>
                <input type="text" placeholder="Number" ref={(input) => {this.numberInput = input}}/>
                <input type="text" placeholder="Role" ref={(input) => {this.roleInput = input}}/>
                <button onClick={this.addPlayer.bind(this)}>Add player</button>

                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Number</th>
                        <th>Role</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.props.playerReducer.players.map((player, index) =>
                        <tr key={index}>
                            <td>{player.id}</td>
                            <td>{player.name}</td>
                            <td>{player.lastName}</td>
                            <td>{player.number}</td>
                            <td>{player.role}</td>
                            <td><button onClick={this.deletePlayer.bind(this, player.id)}>Remove</button></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}