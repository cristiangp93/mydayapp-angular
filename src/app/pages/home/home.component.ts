import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {listTasks} from "../../store/tasks/tasks.actions";
import {getTasks} from "../../store/tasks/tasks.selectors";
import {Observable} from "rxjs";
import {TaskModel} from "../../models/task.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  tasks$!: Observable<TaskModel[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(listTasks());

    this.tasks$ = this.store.select(getTasks);

    console.log(this.tasks$.subscribe())
  }

}
