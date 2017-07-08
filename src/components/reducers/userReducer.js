import {ADD_USER} from '../constants/User';
import {DELETE_USER} from '../constants/User';

const initialState = [];

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return [...state,
                action.payload
            ];

        default:
            return state;
    }
}