import { Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToggleTodoAccion, EditarTodoAccion, BorrarTodoAccion } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo : Todo;
  @ViewChild('txtInputFocus', {static : false}) txtInputFocus : ElementRef;
  
  chkfield : FormControl;
  txtInput : FormControl;
  editando : boolean;

  constructor(private store : Store<AppState>) { }

  ngOnInit() {
    this.chkfield = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto , Validators.required);    

    this.chkfield.valueChanges.subscribe(
      ()=>{
        const accion = new ToggleTodoAccion(this.todo.id)
        this.store.dispatch(accion);
      }
    );
  }

  editar(){
    this.editando = true;
    setTimeout(()=>{
      this.txtInputFocus.nativeElement.select(); 
    },1);    
  }

  terminarEdicion(){
    this.editando = false;

    if(this.txtInput.invalid){
      return;
    }

    if(this.txtInput.value === this.todo.texto){
      return;
    }


    const accion = new EditarTodoAccion(this.todo.id, this.txtInput.value);
    this.store.dispatch(accion);
  }

  borrar(){    
    const accion = new BorrarTodoAccion(this.todo.id);
    this.store.dispatch(accion);
  }

}
