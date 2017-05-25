import {
  SELECT_THREAD, INVALIDATE_THREAD,
  REQUEST_POSTS, RECEIVE_POSTS
} from '../actions/fetchThreads'


function selectedThread(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_THREAD:
      return action.thread
    default:
      return state
  }
}

function posts(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case INVALIDATE_THREAD:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function postsInThread(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_THREAD:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.thread]: posts(state[action.thread], action)
      })
    default:
      return state
  }
}