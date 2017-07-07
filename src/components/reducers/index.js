import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import page from './page';
import userReducer from './userReducer';

export default combineReducers({
    routing: routerReducer,
    userReducer,
    page
});