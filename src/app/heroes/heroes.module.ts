import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarHeroeComponent } from './pages/agregar-heroe/agregar-heroe.component';
import { BuscarHeroeComponent } from './pages/buscar-heroe/buscar-heroe.component';
import { ConsultarHeroeComponent } from './pages/consultar-heroe/consultar-heroe.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TodosHeroesComponent } from './pages/todos-heroes/todos-heroes.component';

import { HeroesRoutingModule } from './heroes-routing.module';
//Este modulo es para usar flex box, npm i @angular/flex-layout @angular/cdk
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';


@NgModule({
  declarations: [
    AgregarHeroeComponent,
    BuscarHeroeComponent,
    ConsultarHeroeComponent,
    InicioComponent,
    TodosHeroesComponent,
    HeroeTarjetaComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,// importamos
    MaterialModule,
  ]
})
export class HeroesModule { }
