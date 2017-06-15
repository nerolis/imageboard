import { SET_THREADS, ADD_THREAD, THREAD_DELETED} from '../constants/threads';

export default function threads(state = [], action = {}) {
  switch(action.type) {
    case ADD_THREAD:
      return [
        state,
        action.thread
      ];   

    case THREAD_DELETED:
      return state.filter(thread => thread.id !== action.threadsId)
    
    case SET_THREADS: 
      return action.threads;
    default: return state;
  }
}
