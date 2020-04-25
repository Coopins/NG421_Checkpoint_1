import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { ITodo } from '../interfaces/itodo';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo: ITodo;

  constructor(
    private todoService: TodoService,
    private modalService: NgbModal
  ) {}

  todoTitle = '';
  isEditing = false;
  ngOnInit() {}

  async deleteTodo(todo: ITodo) {
    let result: string;
    const modal = this.modalService.open(ConfirmationModalComponent);
    modal.componentInstance.modalInstance = modal;
    try {
      result = await modal.result;
      if (result === 'yes') {
        this.todoService.deleteTodo(todo);
      }
    } catch (ex) {}
  }

  getStatuses() {
    return this.todoService.getStatuses();
  }

  async TodoEdit(todo: ITodo) {
    let result: string;
    const modal = this.modalService.open(TodoEditComponent);
    modal.componentInstance.modalInstance = modal;
    modal.componentInstance.todo = todo;

    try {
      result = await modal.result;
      this.todo.description = result;
    } catch (ex) {}
  }
}
