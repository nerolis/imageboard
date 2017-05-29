import axios from 'axios';
import { Link, Route, browserHistory} from 'react-router-dom';


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
        return axios.post('http://localhost:3000/api/auth', data).then(res => {
            console.log('log-in')
        })
    }
}



 export function authToken(){
    // Заготовочка для токена
    
 }