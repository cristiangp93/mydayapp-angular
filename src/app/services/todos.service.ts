import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {TodoClass, TodoModel} from "../models/todo.model";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos: TodoModel[] = [];
  private todosBS = new BehaviorSubject<TodoModel[]>(this.todos);

  // private filter: Filter = 'all';
  // private filterBS = new BehaviorSubject<Filter>(this.filter)

  constructor(private storage: StorageService) {
    this.readStorage()
  }

  getTodos() {
    return this.todosBS.asObservable();
  }

  add(title: string): void {
    const newTodo: TodoModel = new TodoClass(title);
    this.todos = [...this.todos, newTodo];
    this.save();
  }

  readStorage() {
    this.todos = this.storage.readStorage();
    this.save();
  }

  private save(): void {
    this.todosBS.next(this.todos);
    this.storage.save(this.todos);
  }

}
