import axios from 'axios';
import {GET_PLAYERS} from '../constants/Player';
import {ADD_PLAYER} from '../constants/Player';
import store from '../store/store';

export function getListPlayers() {
    axios.get('http://localhost:8080/getPlayers')
        .then(function(response){
            store.dispatch({
                type: GET_PLAYERS,
                payload: response.data
            })
        });
}

export function addPlayer(player) {
    axios.post('http://localhost:8080/addPlayer', player)
        .then(function (response) {
            store.dispatch({
                type: ADD_PLAYER,
                payload: response.data
        })
    });
}