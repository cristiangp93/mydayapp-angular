import {createAction, props} from "@ngrx/store";
import {TaskModel} from "../../models/task.model";

const LIST_TASKS = "[Tasks] list tasks";
const LIST_TASKS_SUCCESS = "[Tasks] list tasks success";

export const listTasks = createAction(
  LIST_TASKS,
)

export const listTasksSuccess = createAction(
  LIST_TASKS_SUCCESS,
  props<{tasks: TaskModel[]}>()
);
