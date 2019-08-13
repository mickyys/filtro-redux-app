import * as todoAccion from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Todo Prueba 1');
const todo2 = new Todo('Todo Prueba 2');
const todo3 = new Todo('Todo Prueba 3');

todo2.completado = true;

const estadoInciial : Todo[] = [todo1, todo2, todo3];

export function todosReducer(state = estadoInciial, action : todoAccion.Acciones) : Todo[]{

    switch(action.type){
        case todoAccion.AGREGAR_TODO : {
            const todo = new Todo(action.texto);
            return [...state, todo];            
        }
        case todoAccion.TOGGLE_TODO : {
            return state.map(x => {
                if(x.id === action.id){
                   return {
                     ...x,
                     completado : !x.completado
                   } 
                }else{
                    return x;
                }
            });
        }
        case todoAccion.EDITAR_TODO : {
            return state.map( x =>{
                if(x.id === action.id){
                    return {
                        ...x,
                        texto : action.texto
                    }
                }else{
                    return x;
                }
            });
        }
        case todoAccion.BORRAR_TODO :{
            return state.filter(x=> x.id !== action.id);
        }
        case todoAccion.TOGGLE_ALL_TODO : {
            return state.map(x =>{
                return {
                    ...x,
                    completado : action.completado
                };
            });
        }
        case todoAccion.BORRAR_ALL_TODO :{
            return state.filter(x=> !x.completado);
        }
        default:
            return state;
    }
}