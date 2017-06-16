import axios from 'axios';

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function setUser(user) {
  return {
    type: SET_USER,
    user
  }
}
export function userFetched(login) {
  return {
    type: USER_FETCHED,
    user
  }
}


export function updateSettings(login, data) {
    return dispatch => {
        return axios.put(`https://yyychan.herokuapp.com/api/userUpdate/${login}`, data).then(res => {
        })
          
        }
    }

