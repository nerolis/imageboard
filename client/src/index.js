import React from 'react';
import ReactDOM from 'react-dom';

import App from './main/main.js'
import routes from './routers';

// Reducers import
// import reducers from './reducers/index.js';
// Style import
//import '../styles/index.scss';

// Store definition with Middleware applying and Rendering of React Document Object Model
// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
    <App />, document.getElementById('root'));