import {SET_TASKS, TASK_DELETED, ADD_TASK} from '../constants/tasks';

export default function tasks(state = [], action = {}) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        action.tasks
      ];
    case TASK_DELETED:
      return state.filter(post => post.id !== action.taskID)

    case SET_TASKS:
      return action.tasks;
    default: return state;
  }

}