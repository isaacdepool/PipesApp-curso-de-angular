import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroe: Heroe[], value: string = 'Sin valor'): Heroe[] {
    
    if(value === 'Sin valor'){
      return heroe;
    }

    if(value === 'color'){
      return heroe = heroe.sort((a,b) => (a.color > b.color) ? 1 : -1)
    }

    if(value === 'nombre'){
      return heroe = heroe.sort((a,b) => (a.nombre > b.nombre) ? 1 : -1)
    } 

    if(value === 'vuela'){
      return heroe = heroe.sort((a,b) => (a.vuela < b.vuela) ? 1 : -1)
    } 

    return heroe;
  }

}
