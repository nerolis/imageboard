import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';

import { provider , Provider} from 'react-redux';

import { createStore, applyMiddleware } from 'redux';

import reduxThunk from 'redux-thunk';
import reducers from './reducers/index';
import {Router} from 'react-router';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <Board/>
    </Provider>,
    document.getElementById('root') 
);