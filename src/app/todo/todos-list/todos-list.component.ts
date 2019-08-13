import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todoList : Todo[] = []
  filtro : string;

  constructor(private store : Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(
      state =>{
        this.todoList = state.todos;
        this.filtro = state.filtro;
      }
    )
  }

}
