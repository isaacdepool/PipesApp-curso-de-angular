import { Component } from '@angular/core';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styles: [
  ]
})
export class BasicoComponent {

  nombreLower: string = 'isaac';
  nombreUpper: string = 'ISAAC';
  nombreCompleto: string = 'isAaC DepOOl';
  fecha: Date = new Date();

}
