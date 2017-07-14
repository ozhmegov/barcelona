import axios from 'axios';
import {FETCH_USERS} from '../constants/User';
import store from '../store/store';

export default function getUsers() {
    axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(function(response){
            store.dispatch({
                type: FETCH_USERS,
                payload: response.data
            })
        });
}