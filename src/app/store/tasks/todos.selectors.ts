import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TodoState} from "./todo.state";

export const TODOS_STATE_NAME = 'todos';

const getTodosState = createFeatureSelector<TodoState>(TODOS_STATE_NAME);

export const getTodos = createSelector(getTodosState, (state: TodoState) => {
  return state.todos;
});
