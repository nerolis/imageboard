// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
// Reducers
import reducers from './reducers/index';
// Styles
import './styles/index.scss';
// Components
import routes from './routers';
import Board from './components/Board';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Board/>
    </Provider>,
    document.getElementById('root') 
);