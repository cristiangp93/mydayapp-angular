export interface TodoModel {
  id: string;
  title: string;
  completed: boolean;
}

export class TodoClass implements TodoModel{
  id: string;
  completed: boolean;

  constructor(public title: string) {
    this.id = 'id_' + Date.now();
    this.title = title;
    this.completed = false;
  }

}
