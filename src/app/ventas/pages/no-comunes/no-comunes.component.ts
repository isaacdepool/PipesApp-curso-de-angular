import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18Select
  nombre: string = 'Isaac';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitado',
    'femenino': 'invitada',
  }

  // i18Prural
  clientes: string[] = ['Maria', 'Pedro','isaac','1'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    if(this.nombre === 'Isaac'){

      this.nombre = 'Maria';
      this.genero = 'femenino'

    }else{
      this.nombre = 'Isaac';
      this.genero = 'masculino'
    }
  }

  borrarCliente(){
    this.clientes.splice(0,1);
  }

  // KeyValue Pipe

  persona = {
    nombre: 'Isaac',
    edad: 21,
    direccion: 'Maracaibo, Venezuela'
  }

  heroe = [
    {
      nombre: 'SpiderMan',
      vuela: false
    },
    {
      nombre: 'Hulk',
      vuela: false
    },
    {
      nombre: 'Vision',
      vuela: true
    }
  ]

  // Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((res, reje) =>{
    setTimeout(() => {
      res('Tenemos data de promesa')
    }, 4000);
  })
}
