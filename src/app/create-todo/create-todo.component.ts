import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent implements OnInit {
  todoTitle: '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  addTodo(): void {
    this.todoService.addTodo({
      title: this.todoTitle,

      status: 'Todo',
      description: '',
      createdAt: new Date(),
    });
  }
}
