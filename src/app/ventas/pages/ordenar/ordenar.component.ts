import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  boo: boolean = false;
  value: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'SuperMan',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.boo = !this.boo
  }

  porNombre(){
    this.value = 'nombre'
  }

  vuela(){
    this.value = 'vuela'
  }
  porColor(){
    this.value= 'color'
    console.log(this.value);
    
  }

}
