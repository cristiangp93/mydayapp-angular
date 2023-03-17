import {createAction, props} from "@ngrx/store";
import {TodoModel} from "../../models/todo.model";

const LIST_TODOS = "[Todos] list todos";
const LIST_TODO_SUCCESS = "[Todos] list todos success";

export const listTodos = createAction(
  LIST_TODOS,
)

export const listTodosSuccess = createAction(
  LIST_TODO_SUCCESS,
  props<{todos: TodoModel[]}>()
);
