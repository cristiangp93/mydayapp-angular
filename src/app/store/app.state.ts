import {ActionReducerMap} from "@ngrx/store";
import {TASKS_STATE_NAME} from "./tasks/tasks.selectors";
import {TasksState} from "./tasks/tasks.state";
import {tasksReducer} from "./tasks/tasks.reducer";

export interface AppState {
  [TASKS_STATE_NAME]: TasksState
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  [TASKS_STATE_NAME]: tasksReducer
}
