import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class Team extends Component {
    constructor () {
        super();
        this.state = {
            showModal: false
        };
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    addPlayer(){
        this.props.playerActions.addPlayer({
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

    updatePlayer(player){
        // this.nameInput.value = player.name;
        // this.lastNameInput.value = player.lastName;
        // this.numberInput.value = player.number;
        // this.roleInput.value = player.role;
        // this.props.playerActions.updatePlayer(player);
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
                            <td><button onClick={this.updatePlayer.bind(this, player)}>Update</button></td>
                        </tr>
                    )}
                    </tbody>
                </table>

                <button onClick={this.handleOpenModal.bind(this)}>Trigger Modal</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                    <input type="text"/>
                    <button onClick={this.handleCloseModal.bind(this)}>Close Modal</button>
                </ReactModal>
            </div>
        );
    }
}