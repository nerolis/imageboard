import axios from 'axios';

import { FETCH_THREAD } from '../constants/threads.js';

export function fetchThread() {
    return function(dispatch) {
        return axios.get('http://localhost:3000/api/threads', {mode: 'cors'})
            .then(response => {
               console.log(response.data.threads[0]);
               const threadsObj = response.data.threads[0];
               const data = {
                      id: threadsObj.id,
                      name: threadsObj.title,
                      title: threadsObj.name,
                      text: threadsObj.text,
                      image: threadsObj.name
               }
               dispatch({
                 type: FETCH_THREAD,
                 payload: data

               })
                         console.log(data);
              } );
    }
}