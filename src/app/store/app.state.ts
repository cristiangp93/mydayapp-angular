import {ActionReducerMap} from "@ngrx/store";
import {TODOS_STATE_NAME} from "./tasks/todos.selectors";
import {TodoState} from "./tasks/todo.state";
import {todosReducer} from "./tasks/todos.reducer";

export interface AppState {
  [TODOS_STATE_NAME]: TodoState
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  [TODOS_STATE_NAME]: todosReducer
}
