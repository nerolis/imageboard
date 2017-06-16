import axios from 'axios';
export function setUser(user) {
  return {
    type: SET_THREADS,
    user
  }
}
export function updateSettings(login) {
    return dispatch => {
        return axios.put(`https://yyychan.herokuapp.com/api/userUpdate/${login}`).then(res => {
        }).then(() => {
               axios.get(`https://yyychan.herokuapp.com/api/userUpdate/${login}`, {mode: 'cors'})
            .then(response => {
               dispatch(setUser(response.data.user))      
          });
        })
    }
}
