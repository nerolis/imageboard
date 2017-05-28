import axios from 'axios';
import { Link, Route, browserHistory} from 'react-router-dom';
export function loginAuth(data) {
    return dispatch => {
        return axios.post('http://localhost:3000/api/auth', data), {mode: 'cors'}
    }
}

 export function updateData(){
    //update state if needed
    
 }