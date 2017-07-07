import {SET_USERNAME} from '../constants/User';
import {ADD_USER} from '../constants/User';

const initialState = {
    name: []
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USERNAME:
            return { ...state, name: action.payload };

        case ADD_USER:
            return {
                ...state,
                name:[...state.name, action.payload]
            };

        default:
            return state;
    }
}