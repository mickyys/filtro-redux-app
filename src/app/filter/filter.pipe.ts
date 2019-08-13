import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';

import * as fromFiltro from './filter.actions'

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos : Todo[], filtro: fromFiltro.filtrosVarios): any {
    
    switch(filtro){
      case 'completados' :{
        return todos.filter(x => x.completado)
      }
      case 'pendientes' : {
        return todos.filter(x => !x.completado)
      }
      default :{
        return todos;
      }        
    }
    
  }

}
