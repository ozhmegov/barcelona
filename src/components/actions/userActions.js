import {SET_USERNAME} from '../constants/User';
import {ADD_USER} from '../constants/User';

export function setUsername(name) {
    return {
        type: SET_USERNAME,
        payload: name
    }
}

export function addUser(name) {
    return {
        type: ADD_USER,
        payload: name
    }
}