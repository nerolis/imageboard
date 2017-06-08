import axios from 'axios';
import { SET_POSTS, ADD_POSTS} from '../constants/posts';
import { SET_THREADS, ADD_THREADS} from '../constants/threads';
export function setPosts(posts) {
  return {
    type: SET_POSTS,
    posts
  }
}
export function setThreads(threads) {
  return {
    type: SET_THREADS,
    threads
  }
}

// .then - временно, потом сделаю отдельно компонент под лайки, где будет валидация и обновление.
export function upvoteThread(thread) {
    return dispatch => {
        return axios.put(`https://yyychan.herokuapp.com/api/threads/${thread}`).then(res => {
        }).then(() => {
               axios.get('https://yyychan.herokuapp.com/api/threads', {mode: 'cors'})
            .then(response => {
               dispatch(setThreads(response.data.threads))      
          });
        })
    }
}

export function upvotePost(post) {
    return dispatch => {
        return axios.put(`https://yyychan.herokuapp.com/api/posts/${post}`).then(res => {
            console.log(post)
        }).then(() => {
             axios.get('https://yyychan.herokuapp.com/api/posts', {mode: 'cors'})
            .then(response => {
               const postsObj = response.data.posts[0];
               const data = {
               }
               dispatch(setPosts(response.data.posts));
              } );
        })
    }
}