import { SET_USER, USER_UPDATED, SETTINGS_DELETED} from '../constants/user';
export default function user(state = [], action = {}) {
  switch(action.type) {
    case USER_UPDATED:
    return [
        ...state,
        action.user
      ];
   case SETTINGS_DELETED:
      return state.filter(user => user.id !== action.userId)
      
    case SET_USER:
      return action.user;
    default: return state;
  }
  
}