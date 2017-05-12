import { combineReducers } from 'redux';

import threadsReducer from './threads';

const rootReducer = combineReducers({
    threads: threadsReducer
});

export default rootReducer;