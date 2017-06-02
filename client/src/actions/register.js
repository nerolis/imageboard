import axios from 'axios';
export function register(data) {
    return dispatch => {
        return axios.post('http://localhost:3000/api/register', data).then(res => {
        })
    }
}
export function isUserExists(login) {
  return dispatch => {
    return axios.get(`/api/register/${login}`);
  }
}