import {ADD_PLAYER, UPDATE_PLAYER, GET_PLAYERS, DELETE_PLAYER} from '../constants/Player';
import store from '../store/store';
import axios from 'axios';

export function addPlayer(player) {
    return (dispatch) => {
        axios.post('http://localhost:8080/addPlayer', player)
            .then((response) => dispatch({
                type: ADD_PLAYER,
                payload: response.data
            }))
    }
}

export function deletePlayer(id) {
    return (dispatch) => {
        axios.delete('http://localhost:8080/removePlayer/'+id)
            .then((response) => dispatch({
                type: DELETE_PLAYER,
                payload: response.data
            }))
    }
}

export function updatePlayer(player) {
    return (dispatch) => {
        axios.put('http://localhost:8080/updatePlayer/', player)
            .then((response) => dispatch({
                type: UPDATE_PLAYER,
                payload: response.data
            }))
    }
}

export function getListPlayers () {
    axios.get('http://localhost:8080/getPlayers')
        .then((response) => {
            store.dispatch({
                type: GET_PLAYERS,
                payload: response.data
            })
        });
}


