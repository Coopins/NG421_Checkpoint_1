import { Component, OnInit, ViewChild } from '@angular/core';
import {ITodo} from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';
import { MatTableDataSource} from  '@angular/material/table';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css'],
})
export class TodoTableComponent implements OnInit {

  dataSource: MatTableDataSource<ITodo>;

  get todoList(): ITodo[] {
    return this.todoService.getTodos();
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['id', 'title', 'status', 'description', 'createdAt'];

  constructor(private todoService: TodoService) { }


  ngOnInit() {
    this.sort.direction = 'asc';
    this.sort.active = this.displayedColumns[0];

    this.dataSource = new MatTableDataSource(this.todoList);
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
