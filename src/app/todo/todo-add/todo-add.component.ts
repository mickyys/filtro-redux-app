import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import * as todoAccion from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInput : FormControl;

  constructor(private store : Store<AppState>) { }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }

  agregarTodo(){
    console.log(this.txtInput.valid);
    console.log(this.txtInput.value);
    if(this.txtInput.invalid){
      return;
    }

    const accion = new todoAccion.AgregarTodoAccion(this.txtInput.value);
    this.store.dispatch(accion);
    this.txtInput.setValue('');
  }

}
