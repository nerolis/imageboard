import { combineReducers } from 'redux';

import threads from './threads';
import posts from './posts';
import flashMessages from './flashMessages';
import fetchThreads from './FetchThreads';
import videos from './youtube';

export default combineReducers({
    threads,
    posts,
    fetchThreads,
    flashMessages,
    videos,
}); 