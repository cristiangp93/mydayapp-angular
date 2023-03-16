import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {TaskModel} from "../models/task.model";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTasks(): Observable<TaskModel[]> {
    if (localStorage.getItem('tasks')) {
      return JSON.parse(localStorage.getItem('tasks')!);
    } else {
      return of([]);
    }

  }
}
