import { Component, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
})
export class TodoEditComponent implements OnInit {
  constructor() {}

  todo: ITodo;
  newDescription: string;

  modalInstance: NgbModalRef;

  ngOnInit() {}

  yes() {
    this.modalInstance.close(this.newDescription);
  }

  cancel() {
    this.modalInstance.close(this.todo.description);
  }
}
