import {ADD_USER} from '../constants/User';
import {DELETE_USER} from '../constants/User';

export function addUser({id, userId, title}) {
    return {
        type: ADD_USER,
        payload: {id, userId, title}
    }
}

export function deleteUser(id) {
    return {
        type: DELETE_USER,
        payload: id
    }
}