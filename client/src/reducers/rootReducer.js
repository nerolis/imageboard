import { combineReducers } from 'redux';

import threads from './threads';
import posts from './posts';
import flashMessages from './flashMessages';
import auth from './auth';

export default combineReducers({
    threads,
    posts,
    flashMessages,
    auth,
}); 