import { combineReducers } from 'redux';

import threads from './threads';
import posts from './posts';

export default combineReducers({
    threads,
    posts,
}); 