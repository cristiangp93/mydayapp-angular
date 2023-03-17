import {TodoModel} from "../../models/todo.model";

export interface TodoState {
  todos: TodoModel[];
}

export const initialState: TodoState = {
  todos: []
}
