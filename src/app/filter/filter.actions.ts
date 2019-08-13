import { Action } from '@ngrx/store'
import { Todo } from '../todo/model/todo.model';

export const SET_FILTRO = '[Filter] set filtro';
export type filtrosVarios = 'todos' | 'completados'| 'pendientes';


export class setFiltroAction implements Action{
    readonly type = SET_FILTRO;
    constructor(public filtro : filtrosVarios){}
}


export type acciones = setFiltroAction 
                       ;