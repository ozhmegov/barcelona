import {ADD_USER} from '../constants/User';
import {DELETE_USER} from '../constants/User';

export function addUser({name, lastName}) {
    return {
        type: ADD_USER,
        payload: {name, lastName}
    }
}

export function deleteUser(id) {
    return {
        type: DELETE_USER,
        payload: {id}
    }
}