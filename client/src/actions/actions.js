import axios from 'axios';
import { SET_THREADS, ADD_THREADS} from '../constants/threads';

export const SELECT_SUBTHREAD = 'SELECT_SUBTHREAD'
export const INVALIDATE_SUBTHREAD = 'INVALIDATE_SUBTHREAD'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function selectSubThread(subThread) {
  return {
    type: SELECT_SUBTHREADT,
    subThread
  }

}

export function invalidateSubThread(subThread) {
  return {
    type: INVALIDATE_SUBTHREAD,
    subThread
  }
}

function requestPosts(subThread) {
  return {
    type: REQUEST_POSTS,
    subThread
  }
}

function receivePosts(subThread, json) {
  return {
    type: RECEIVE_POSTS,
    subThread,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}


function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function setThreads(threads) {
  return {
    type: SET_THREADS,
    threads
  }
}

export function addThread(threads) {
  return {
    type: ADD_THREADS,
    threads
  }
}

export function createThread(data) {
  return dispatch => {
    return fetch('http://localhost:3000/api/threads', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",    
      }
    }).then(handleResponse)
    .then(data => dispatch(addThread(data.threads)))
  }
}
//todo: через аксиос переделать всё.
export function fetchThread() {
    return dispatch => {
         axios.get('http://localhost:3000/api/threads/', {mode: 'cors'})
            .then(response => {
               dispatch(setThreads(response.data.threads))
                
               
      });
    }
}

export function fetchSelectThread() {
    return dispatch => {
         axios.get(`localhost:3000/api/threads/${thread.id}`), {mode: 'cors'}
            .then(response => {
               dispatch(setThreads(response.data.threads))
                
               
      });
    }
}

