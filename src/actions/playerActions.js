import {ADD_PLAYER} from '../constants/Player';
import {DELETE_PLAYER} from '../constants/Player';
import {GET_PLAYERS} from '../constants/Player';

export function addPlayer(player) {
    return {
        type: ADD_PLAYER,
        payload: player
    }
}

export function deletePlayer(id) {
    return {
        type: DELETE_PLAYER,
        payload: id
    }
}

export function getPlayers(players) {
    console.log(players);
    return {
        type: GET_PLAYERS,
        payload: players
    }
}
