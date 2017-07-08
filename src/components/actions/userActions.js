import {ADD_USER} from '../constants/User';
import {DELETE_USER} from '../constants/User';

export function addUser({name, lastName}) {
    return {
        type: ADD_USER,
        payload: {name, lastName}
    }
}

export function deleteUser({name, lastName}) {
    return {
        type: DELETE_USER,
        payload: {name, lastName}
    }
}