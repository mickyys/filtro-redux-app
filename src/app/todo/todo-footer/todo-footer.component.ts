import { Component, OnInit } from '@angular/core';
import * as fromFiltros from '../../filter/filter.actions';
import * as fromTodo from '../todo.actions';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosVarios : fromFiltros.filtrosVarios [] = ["todos","pendientes","completados"]
  filtroActual : fromFiltros.filtrosVarios;

  pendientes : number;

  constructor(private store : Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(
      state =>{
        this.contarPendientes(state.todos);
        this.filtroActual = state.filtro;
      }
    )
  }

  cambiarFiltro(nuevoFiltro : fromFiltros.filtrosVarios){
    const accion = new fromFiltros.setFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

  contarPendientes(todos : Todo[]){
    this.pendientes = todos.filter(x => !x.completado).length;
  }

  borrarTodo(){
    const accion = new fromTodo.BorrarAllTodoAccion();
    this.store.dispatch(accion);
  }

}
