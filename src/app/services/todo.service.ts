import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoId: number = 0;
  todoList: ITodo[] = [
  ];
  statuses: string[] = [
    'Todo',
    'Doing',
    'Done'
  ];

  constructor() {}
  getTodos(status?) {
    if (!status) {
      return this.todoList;
    }
    return this.todoList.filter(t => status === t.status);
  }

  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex((todoItem) => todoItem === todo);
    this.todoList.splice(index, 1);
  }
  addTodo(todo: ITodo): void {
    todo.id = this.todoId++;
    this.todoList.push(todo);
  }

  getStatuses() {
    return this.statuses;
  }

}