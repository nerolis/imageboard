import { FETCH_THREAD } from '../constants/threads';

const INITIAL_STATE = {
    threads: null 
}
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_THREAD:
        console.log(action.type)
        
    default: return state;
    }
}