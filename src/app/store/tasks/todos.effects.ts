import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {listTodos, listTodosSuccess} from "./todo.actions";
import {catchError, map, mergeMap, of, tap} from "rxjs";
import {TodosService} from "../../services/todos.service";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";

@Injectable()
export class TodosEffects {

  loadTodo$ = createEffect(() => this.actions$.pipe(
    ofType(listTodos),
    mergeMap(() => this.tasksService.getTodos()
      .pipe(
        map((todos) => {
          return listTodosSuccess({todos});
        }),
        catchError(err => {
          console.log(err)
          return of();
        })
      )
    ))
  );

  constructor(private actions$: Actions,
              private tasksService: TodosService,
              private store: Store<AppState>) {
  }

}
