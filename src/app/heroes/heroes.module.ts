import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarHeroeComponent } from './pages/agregar-heroe/agregar-heroe.component';
import { BuscarHeroeComponent } from './pages/buscar-heroe/buscar-heroe.component';
import { ConsultarHeroeComponent } from './pages/consultar-heroe/consultar-heroe.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TodosHeroesComponent } from './pages/todos-heroes/todos-heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';



@NgModule({
  declarations: [
    AgregarHeroeComponent,
    BuscarHeroeComponent,
    ConsultarHeroeComponent,
    InicioComponent,
    TodosHeroesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
