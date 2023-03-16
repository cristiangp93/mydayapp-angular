import {createAction, props} from "@ngrx/store";

const LIST_TASKS = "[Tasks] get tasks";
const LIST_TASKS_SUCCESS = "[Tasks] get tasks success";

export const listTasks = createAction(
  LIST_TASKS,
)

export const getTasksSuccess = createAction(
  LIST_TASKS_SUCCESS
);
