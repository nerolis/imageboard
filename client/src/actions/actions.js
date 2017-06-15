import axios from 'axios';
import { SET_THREADS, ADD_THREADS, THREAD_DELETED} from '../constants/threads';
import react from 'react';

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

export function threadDeleted(threadsId) {
  return {
    type: THREAD_DELETED,
    threadsId
  }
}

export function createThread(data) {
  return dispatch => {
    return fetch('https://yyychan.herokuapp.com/api/threads', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",    
      }
    }).then(handleResponse)
    .then(data => dispatch(addThread(data.threads)))
  }
}
export function deleteThread(thread) {
  return dispatch => {
    return fetch(`https://yyychan.herokuapp.com/api/threads/${thread}`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json",    
      }
    })
    .then(data => dispatch(threadDeleted(thread)))
  }
}


// https://facebook.github.io/react/docs/update.html
// Слайс не >array.slice() which does not mutate the original array 
// Ещё раз, это временно. Полноценная пагинация/инфинити скролл будет реализован иначе.
export function fetchThread() {
    return dispatch => {
         axios.get('https://yyychan.herokuapp.com/api/threads', {mode: 'cors'})
            .then(response => {
               console.log(response.data.threads)
               dispatch(setThreads(response.data.threads.slice(0, 5)))   
      })
    }
}

export function FetchMoreThreads() {
    return dispatch => {
         axios.get('https://yyychan.herokuapp.com/api/threads', {mode: 'cors'})
            .then(response => {
               dispatch(setThreads(response.data.threads))   
      })
    }
}

export function fetchOneThread(id) {
    return dispatch => {
         axios.get(`https://yyychan.herokuapp.com/api/threads/${id}`, {mode: 'cors'})
            .then(response => {
               dispatch(setThreads(response.data.threads))   
      })
    }
}