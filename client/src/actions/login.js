import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(login) {
  return {
    type: SET_CURRENT_USER,
    login
  };
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
          dispatch(setCurrentUser(jwtDecode(token)))
      });
    }
}