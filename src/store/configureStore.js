import axios from 'axios';
import {FETCH_PLAYER} from '../constants/Player';
import store from '../store/store';

export default function getPlayers() {
    axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(function(response){
            store.dispatch({
                type: FETCH_PLAYER,
                payload: response.data
            })
        });
}