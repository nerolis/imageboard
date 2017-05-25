import { combineReducers } from 'redux';

import threads from './threads';
import posts from './posts';
import flashMessages from './flashMessages';
import fetchThreads from './FetchThreads';

export default combineReducers({
    threads,
    posts,
    fetchThreads,
    flashMessages,
}); 