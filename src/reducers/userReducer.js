import {ADD_USER} from '../constants/User';
import {DELETE_USER} from '../constants/User';
import {FETCH_USERS} from '../constants/User';

const initialState = {
    users: []
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload
            };

        case ADD_USER:
            return {
                ...state,
                users: [
                    ...state.users,
                    action.payload
                ]
            };

        case DELETE_USER:
            let id = action.payload;
            return {...state,
                users: state.users.filter(user => user.id !== id)
            };

        default:
            return state;
    }
}