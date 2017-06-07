// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
// Reducers
import reducers from './reducers/rootReducer';
// Styles
import './styles/index.scss';
// middlewares
// Components
import App from './components/App'


const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore);
ReactDOM.render(
    <BrowserRouter>
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>
     </BrowserRouter>, document.getElementById('root') 
     );