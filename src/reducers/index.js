import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import playerReducer from './playerReducer';

export default combineReducers({
    routing: routerReducer,
    playerReducer
});