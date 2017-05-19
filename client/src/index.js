// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
// Reducers
import reducers from './reducers/index';
// Styles
import './styles/index.scss';
// Components
import routes from './routers';
import App from './components/App'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
ReactDOM.render(
    <BrowserRouter>
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>
     </BrowserRouter>,
    document.getElementById('root') 
);