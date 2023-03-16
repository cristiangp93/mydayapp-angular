import {Action, createReducer, on} from "@ngrx/store";
import {initialState, TasksState} from "./tasks.state";
import {listTasks, getTasksSuccess} from "./tasks.actions";

export const _tasksReducer = createReducer(
  initialState,
  on(listTasks, (state: TasksState, action: Action) => {
    console.log("Inicia get tareas")
    return {
      ...state,
      isLoading: true
    }
  }),
  on(getTasksSuccess, (state: TasksState, action: Action) => {
    console.log("get tareas success")
    return {
      ...state,
      isLoading: false
    }
  }),
);

export function tasksReducer(state: TasksState | undefined, action: Action) {
  return _tasksReducer(state, action)
}
