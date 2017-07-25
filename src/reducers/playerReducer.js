import {ADD_PLAYER} from '../constants/Player';
import {DELETE_PLAYER} from '../constants/Player';
import {FETCH_PLAYER} from '../constants/Player';

const initialState = {
    players: []
};

export default function playerReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PLAYER:
            return {
                ...state,
                players: action.payload
            };

        case ADD_PLAYER:
            return {
                ...state,
                players: [
                    ...state.players,
                    action.payload
                ]
            };

        case DELETE_PLAYER:
            let id = action.payload;
            return {...state,
                players: state.players.filter(player => player.id !== id)
            };

        default:
            return state;
    }
}