import axios from 'axios';
import { SET_POSTS, ADD_POSTS, POST_DELETED, POST_FETCHED} from '../constants/posts';
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
export function postDeleted(postsId) {
  return {
    type: POST_DELETED,
    postsId
  }
}
export function postFetched(postsId) {
  return {
    type: GAME_FETCHED,
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
export function deletePost(post) {
  return dispatch => {
    return fetch(`https://yyychan.herokuapp.com/api/posts/${post}`, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json",    
      }
    }).then(handleResponse)
    .then(data => dispatch(postDeleted(post)))
  }
}

export function fetchOnePost(id) {
  return dispatch => {
    fetch(`https://yyychan.herokuapp.com/api/posts/${id}`)
      .then(res => res.json())
      .then(data => dispatch(postFetched(data.posts)));
  }
}
//todo: через аксиос переделать всё.
export function fetchPost() {
    return dispatch => {
         axios.get('https://yyychan.herokuapp.com/api/posts', {mode: 'cors'})
            .then(response => {
               dispatch(setPosts(response.data.posts));
              } )
    }
}