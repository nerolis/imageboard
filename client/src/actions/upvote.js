import axios from 'axios';
export function upvoteThread(data) {
    return dispatch => {
        return axios.put('https://yyychan.herokuapp.com/api/threads/:threadsId', data).then(res => {
        })
    }
}
export function upvotePost(data) {
    return dispatch => {
        return axios.put('https://yyychan.herokuapp.com/api/posts/:postsId', data).then(res => {
        })
    }
}