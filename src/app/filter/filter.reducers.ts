import * as filterActions from "./filter.actions";

const stateInicial : filterActions.filtrosVarios = 'todos';

export function filtrosReducer(state = stateInicial, action : filterActions.acciones){
    switch (action.type) {
        case filterActions.SET_FILTRO:
            return action.filtro;     
        default:
            return state;
    }
}