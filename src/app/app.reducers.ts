import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from './todo/todo.reducer';
import * as fromFiltro from './filter/filter.reducers';

import * as fromFiltroctions from './filter/filter.actions';

export interface AppState{
    todos : Todo[];
    filtro : fromFiltroctions.filtrosVarios;
}

export const AppReducers : ActionReducerMap<AppState> = {
    todos : fromTodo.todosReducer,
    filtro : fromFiltro.filtrosReducer
}