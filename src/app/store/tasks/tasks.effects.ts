import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {listTasks, getTasksSuccess} from "./tasks.actions";
import {catchError, exhaustMap, map, mergeMap, Observable, of} from "rxjs";
import {TasksService} from "../../services/tasks.service";
import {Action, Store} from "@ngrx/store";
import {AppState} from "../app.state";

@Injectable()
export class TasksEffects {

  logins$ = createEffect(() => this.actions$.pipe(
      ofType(listTasks),
      mergeMap((action: Action) =>
        this.tasksService.getTasks().pipe(
          map((tasks) => {
            console.log("Effects")
            return getTasksSuccess()
          }),
          catchError((err) => of()),
        )
      )
    )
  );

  constructor(private actions$: Actions,
              private tasksService: TasksService,
              private store: Store<AppState>) {
  }

}
