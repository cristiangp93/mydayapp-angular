import {TaskModel} from "../../models/task.model";

export interface TasksState {
  tasks: TaskModel[];
}

export const initialState: TasksState = {
  tasks: []
}
