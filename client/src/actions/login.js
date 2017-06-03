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

export function loginAuth(data) {
    return dispatch => {
        return axios.post('https://yyychan.herokuapp.com/api/auth', data).then(res => {
        })
    }
}


// export function isUserExists(login) {
//   return dispatch => {
//     return axios.get(`/api/users/${login}`);
//   }
// }


 export function authToken(){
    // Заготовочка для токена
    
 }