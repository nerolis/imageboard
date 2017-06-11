// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import { Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'; 
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import jwtDecode from 'jwt-decode';
// Reducers
import rootReducer from './reducers/rootReducer';
import {setCurrentUser} from './actions/login';
// Styles
import './styles/index.scss';
// middlewares

// Components
import App from './components/App'
import setAuthorizationToken from './utils/setAuthorizationToken';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(
   <BrowserRouter>
  <Provider store={store}>
    <App/>
  </Provider>
 </BrowserRouter>, document.getElementById('root') 
);
    