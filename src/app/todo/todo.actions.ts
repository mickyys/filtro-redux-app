import {Action} from '@ngrx/store';

export const AGREGAR_TODO = '[Todo] Agregar todo';
export const TOGGLE_TODO = '[Todo] Toggle todo';
export const EDITAR_TODO = '[Todo] Editar todo';
export const BORRAR_TODO = '[Todo] Borrar todo';
export const BORRAR_ALL_TODO = '[Todo] Borrar All todo';
export const TOGGLE_ALL_TODO = '[Todo] Toggle All todo';

export class AgregarTodoAccion implements Action{
    readonly type = AGREGAR_TODO;
    constructor(public texto : string){
    }
}

export class ToggleTodoAccion implements Action{
    readonly type = TOGGLE_TODO;
    constructor(public id : number){
    }
}

export class EditarTodoAccion implements Action{
    readonly type = EDITAR_TODO;
    constructor(public id : number, public texto : string){
    }
}

export class BorrarTodoAccion implements Action{
    readonly type = BORRAR_TODO;
    constructor(public id : number){
    }
}

export class BorrarAllTodoAccion implements Action{
    readonly type = BORRAR_ALL_TODO;
}

export class ToggleAllTodoAccion implements Action{
    readonly type = TOGGLE_ALL_TODO;
    constructor(public completado : boolean){
    }
}

export type Acciones = AgregarTodoAccion |
                       ToggleTodoAccion  |
                       EditarTodoAccion  |
                       BorrarTodoAccion  |
                       ToggleAllTodoAccion | 
                       BorrarAllTodoAccion
                       ;