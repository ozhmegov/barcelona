import {ADD_PLAYER} from '../constants/Player';
import {DELETE_PLAYER} from '../constants/Player';
import axios from 'axios';

export function addPlayer(player) {
    axios.post('http://localhost:8080/addPlayer', {
        name: player.name,
        lastName: player.lastName,
        number: player.number,
        role: player.role
    }).then(function (response) {
            console.log(response);
        });
}

export function deletePlayer(id) {
    return {
        type: DELETE_PLAYER,
        payload: id
    }
}

export function getPlayers() {
    return {

    }
}