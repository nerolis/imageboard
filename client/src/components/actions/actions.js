import axios from 'axios';

export const SET_THREADS = 'SET_THREADS';
export const ADD_THREADS = 'ADD_THREADS';

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
    .then(data => dispatch(addThread(data.threads)));
  }
}

//todo: через аксиос переделать всё.
export function fetchThread() {
    return dispatch => {
         axios.get('http://localhost:3000/api/threads', {mode: 'cors'})
            .then(response => {
               console.log(response.data.threads[0]);
               const threadsObj = response.data.threads[0];
               const data = {
               }
               dispatch(setThreads(response.data.threads));
                         console.log(data);
              } );
    }
}

export function resetForm() {

}