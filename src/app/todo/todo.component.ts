import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.reducers';
import { Store } from '@ngrx/store';
import { ToggleAllTodoAccion } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  public completado : boolean = false;

  constructor(private store : Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll(){
    this.completado = !this.completado;
    const accion = new ToggleAllTodoAccion(this.completado);
    this.store.dispatch(accion);
  }

}
