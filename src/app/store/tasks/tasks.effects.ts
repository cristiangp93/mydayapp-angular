import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {listTasks, listTasksSuccess} from "./tasks.actions";
import {catchError, map, mergeMap, of} from "rxjs";
import {TasksService} from "../../services/tasks.service";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";

@Injectable()
export class TasksEffects {

  loadTasks$ = createEffect(() => this.actions$.pipe(
    ofType(listTasks),
    mergeMap(() => this.tasksService.getTasks()
      .pipe(
        map((resp) => {
          return listTasksSuccess({tasks: resp});
        }),
        catchError(err => {
          console.log(err)
          return of();
        })
      )
    ))
  );

  constructor(private actions$: Actions,
              private tasksService: TasksService,
              private store: Store<AppState>) {
  }

}
