import { FETCH_THREAD } from '../constants/threads';

// Начальный стейт для редюсера
const INITIAL_STATE = {
    thread: 'null' 
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_THREAD:
            return {...state,
                thread: action.payload
            
        };
        
    default: return state;
    }
}