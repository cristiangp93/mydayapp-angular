import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TasksState} from "./tasks.state";

export const TASKS_STATE_NAME = 'tasks';

const getTasksState = createFeatureSelector<TasksState>(TASKS_STATE_NAME);

export const getTasks = createSelector(getTasksState, (state: TasksState) => {
  return state.tasks;
});
