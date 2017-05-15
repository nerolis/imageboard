import { SET_THREADS, ADD_THREAD } from '../components/actions';

export default function threads(state = [], action = {}) {
  switch(action.type) {
    case ADD_THREAD:
      return [
        ...state,
        action.thread
      ];
    case SET_THREADS:
      return action.threads;
    default: return state;
  }
}