import axios from 'axios';

import { FETCH_THREAD } from '../constants/threads.js';

export function fetchThread() {
    return function(dispatch) {
        return axios.get('http://localhost:3000/api/threads', {mode: 'cors'})
            .then(response => {
               console.log(response);
               dispatch({
                 type: FETCH_THREAD
               })
              } );
    }
}