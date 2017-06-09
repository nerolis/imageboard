import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken'
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function loginAuth(data) {
    return dispatch => {
        return axios.post('https://yyychan.herokuapp.com/api/auth', data).then(res => {
          const token = res.data
          localStorage.setItem('jwtToken', token);
          setAuthorizationToken(token);
          dispatch(setCurrentUser(jwt.decode(token)))
      });
    }
}










// export function isUserExists(login) {
//   return dispatch => {
//     return axios.get(`/api/users/${login}`);
//   }
// }
