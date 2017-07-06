import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import history from './history/history';
import { ConnectedRouter } from 'connected-react-router';
import store from './store/store';

ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </Provider>,
    document.getElementById('root')
);
