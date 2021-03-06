import { combineReducers } from 'redux';

import threads from './threads';
import tasks from './tasks';
import posts from './posts';
import flashMessages from './flashMessages';
import auth from './auth';
import user from './user';
export default combineReducers({
    threads,
    posts,
    flashMessages,
    auth,
    tasks,
}); 