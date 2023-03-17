import {Injectable} from '@angular/core';
import {TodoModel} from "../models/todo.model";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private localStorageKey = "mydayapp-angular";

  constructor() {
  }

  save(todos: TodoModel[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(todos));
  }

  readStorage() {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || "[]");
  }
}
