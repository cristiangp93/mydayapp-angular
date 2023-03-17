import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {listTodos} from "../../store/tasks/todo.actions";
import {getTodos} from "../../store/tasks/todos.selectors";
import {Observable} from "rxjs";
import {TodoClass, TodoModel} from "../../models/todo.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TodosService} from "../../services/todos.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  tasks$!: Observable<TodoModel[]>;
  taskForm: FormGroup = new FormGroup({
    title: new FormControl("", Validators.required)
  });

  constructor(private store: Store<AppState>,
              private tasksService: TodosService) {
  }

  ngOnInit(): void {
    this.store.dispatch(listTodos());

    this.tasks$ = this.store.select(getTodos);
  }

  onSubmit() {
    if (this.taskForm.invalid) {
      return;
    }

    const {title} = this.taskForm.value;

    this.tasksService.add(title);

  }

}
