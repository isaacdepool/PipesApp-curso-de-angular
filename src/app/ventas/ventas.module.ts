import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicoComponent } from './pages/basico/basico.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
  declarations: [
    NumerosComponent, 
    NoComunesComponent, 
    BasicoComponent, 
    OrdenarComponent,
    MayusculasPipe,
    VuelaPipe,
    ColorPipe,
    OrdenarPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumerosComponent, 
    NoComunesComponent, 
    BasicoComponent, 
    OrdenarComponent
  ]
})
export class VentasModule { }
