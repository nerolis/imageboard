import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';

import Board from './components/Board';

import { provider , Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <Board/>
    </Provider>,
    document.getElementById('root') 
);