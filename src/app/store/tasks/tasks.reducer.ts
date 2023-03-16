import {Action, createReducer, on} from "@ngrx/store";
import {initialState, TasksState} from "./tasks.state";
import {listTasksSuccess} from "./tasks.actions";

export const _tasksReducer = createReducer(
  initialState,
  on(listTasksSuccess, (state: TasksState, action) => {
    return {
      ...state,
      tasks: action.tasks
    }
  }),
);

export function tasksReducer(state: TasksState | undefined, action: Action) {
  return _tasksReducer(state, action)
}
