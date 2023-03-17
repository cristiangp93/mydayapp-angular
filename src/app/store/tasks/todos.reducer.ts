import {Action, createReducer, on} from "@ngrx/store";
import {initialState, TodoState} from "./todo.state";
import {listTodosSuccess} from "./todo.actions";

export const _todosReducer = createReducer(
  initialState,
  on(listTodosSuccess, (state: TodoState, action) => {
    return {
      ...state,
      todos: action.todos
    }
  })
);

export function todosReducer(state: TodoState | undefined, action: Action) {
  return _todosReducer(state, action)
}
