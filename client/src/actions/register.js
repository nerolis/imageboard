import axios from 'axios';
export function register(data) {
    return dispatch => {
        return axios.post('https://yyychan.herokuapp.com/api/register', data).then(res => {
        })
    }
}
export function isUserExists(login) {
  return dispatch => {
    return axios.get(`/api/register/${login}`);
  }
}