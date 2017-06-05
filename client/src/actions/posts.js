import axios from 'axios';
import { SET_POSTS, ADD_POSTS} from '../constants/posts';

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function setPosts(posts) {
  return {
    type: SET_POSTS,
    posts
  }
}

export function addPost(posts) {
  return {
    type: ADD_POSTS,
    posts
  }
}

export function createPost(data) {
  return dispatch => {
    return fetch('https://yyychan.herokuapp.com/api/posts', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        
      }
    }).then(handleResponse)
    .then(data => dispatch(addPost(data.posts)));
  }
}

//todo: через аксиос переделать всё.
export function fetchPost() {
    return dispatch => {
         axios.get('https://yyychan.herokuapp.com/api/posts', {mode: 'cors'})
            .then(response => {
               const postsObj = response.data.posts[0];
               const data = {
               }
               dispatch(setPosts(response.data.posts));
              } );
    }
}