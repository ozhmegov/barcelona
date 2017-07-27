import {ADD_PLAYER, UPDATE_PLAYER, GET_PLAYERS, DELETE_PLAYER} from '../constants/Player';

const initialState = {
    players: []
};

export default function playerReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PLAYERS:
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
            return {
                ...state,
                players: state.players.filter(player => player.id !== id)
            };

        case UPDATE_PLAYER:
            return {
                ...state,
                players: state.players.map(player => {
                    return player.id === action.payload.id ? action.payload : player;
                })
            };

        default:
            return state;
    }
}