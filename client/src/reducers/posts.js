import { SET_POSTS, ADD_POST, POST_DELETED, POST_FETCHED} from '../constants/posts';

export default function posts(state = [], action = {}) {
  switch(action.type) {
    case ADD_POST:
    return [
        ...state,
        action.game
      ];
   case POST_DELETED:
      return state.filter(post => post.id !== action.postsId)
      
    case SET_POSTS:
      return action.posts;
    default: return state;
  }
  
}