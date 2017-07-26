import {ADD_PLAYER} from '../constants/Player';
import {GET_PLAYERS} from '../constants/Player';
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

export function getListPlayers () {
    axios.get('http://localhost:8080/getPlayers')
        .then((response) => {
            store.dispatch({
                type: GET_PLAYERS,
                payload: response.data
            })
        });
}


