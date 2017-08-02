import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class Team extends Component {
    constructor () {
        super();
        this.state = {
            showUpdatePlayerModal: false,
            showAddPlayerModal: false,
            player:{
                id: '',
                name: '',
                lastName: '',
                number: '',
                role: ''
            }
        };
    }

    handleChange({ target }) {
        this.setState({
            player: {
                ...this.state.player,
                [target.id]: target.value
            }
        });
    }

    handleOpenUpdatePlayerModal (player) {
        this.setState({
            showUpdatePlayerModal: true,
            player:player
        });
    }

    handleOpenAddPlayerModal () {
        this.setState({
            showAddPlayerModal: true,
            player:{}
        });
    }

    handleCloseUpdatePlayerModal () {
        this.setState({
            showUpdatePlayerModal: false
        });
    }

    handleCloseAddPlayerModal () {
        this.setState({
            showAddPlayerModal: false
        });
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
        this.handleCloseAddPlayerModal();
    }

    deletePlayer(id){
        this.props.playerActions.deletePlayer(id);
    }

    updatePlayer(event){
        event.preventDefault();
        this.props.playerActions.updatePlayer(this.state.player);
        this.handleCloseUpdatePlayerModal();
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Number</th>
                        <th>Role</th>
                        <th><button onClick={this.handleOpenAddPlayerModal.bind(this)}>+</button></th>
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
                            <td><button onClick={this.handleOpenUpdatePlayerModal.bind(this, player)}>Update</button></td>
                        </tr>
                    )}
                    </tbody>
                </table>

                <ReactModal
                    isOpen={this.state.showUpdatePlayerModal}
                    contentLabel="UpdatePlayerModal"
                >
                    <form onSubmit={this.updatePlayer.bind(this)}>
                        <input type="text"
                               id="id" placeholder="Id"
                               value={this.state.player.id}
                               onChange={this.handleChange.bind(this)}/>
                        <input type="text"
                               id="name"
                               placeholder="Name"
                               value={this.state.player.name}
                               onChange={this.handleChange.bind(this)}/>
                        <input type="text"
                               id="lastName"
                               placeholder="Last Name"
                               value={this.state.player.lastName}
                               onChange={this.handleChange.bind(this)}/>
                        <input type="text"
                               id="number"
                               placeholder="Number"
                               value={this.state.player.number}
                               onChange={this.handleChange.bind(this)}/>
                        <input type="text"
                               id="role"
                               placeholder="Role"
                               value={this.state.player.role}
                               onChange={this.handleChange.bind(this)}/>

                        <button type="button" onClick={this.handleCloseUpdatePlayerModal.bind(this)}>Cancel</button>
                        <button type="submit">Save</button>
                    </form>
                </ReactModal>

                <ReactModal
                    isOpen={this.state.showAddPlayerModal}
                    contentLabel="AddPlayerModal"
                >
                    <form id="lF" onSubmit={this.addPlayer.bind(this)}>
                        <input type="text" placeholder="Name" ref={(input) => {this.nameInput = input}}/>
                        <input type="text" placeholder="Last Name" ref={(input) => {this.lastNameInput = input}}/>
                        <input type="text" placeholder="Number" ref={(input) => {this.numberInput = input}}/>
                        <input type="text" placeholder="Role" ref={(input) => {this.roleInput = input}}/>

                        <button type="button" onClick={this.handleCloseAddPlayerModal.bind(this)}>Cancel</button>
                        <button type="submit">Save</button>
                    </form>
                </ReactModal>
            </div>
        );
    }
}