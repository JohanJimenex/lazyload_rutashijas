import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AgregarHeroeComponent } from './pages/agregar-heroe/agregar-heroe.component';
import { BuscarHeroeComponent } from './pages/buscar-heroe/buscar-heroe.component';
import { ConsultarHeroeComponent } from './pages/consultar-heroe/consultar-heroe.component';
import { TodosHeroesComponent } from './pages/todos-heroes/todos-heroes.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const rutas: Route[] = [

  {
    path: "",
    component: InicioComponent,// tiene un <router-outlet>
    children: [
      {
        path: "todoslosheroes",
        component: TodosHeroesComponent
      },
      {
        path: "agregarheroe",
        component: AgregarHeroeComponent
      },
      {
        path: "editar/:id",
        component: AgregarHeroeComponent
      },
      {
        path: "buscarheroe",
        component: BuscarHeroeComponent
      },
      {
        path: ":id",
        component: ConsultarHeroeComponent
      },
      {
        path: "**",
        redirectTo: "todoslosheroes"
      }
    ]
  }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)
  ],
  exports: [
    RouterModule
  ]

})
export class HeroesRoutingModule { }
