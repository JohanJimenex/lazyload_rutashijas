import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: "auth",
    //carga perezosa el modulo autho cuando entran a la ruta auth
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "heroes",
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    //canLoad recibe una lista de Guards que pasaran primero a pedir los permisos 
    //solo impide que se carggue la ruta, una vez cargada no tiene poder aunque cierre
    //seion
    canLoad: [AuthGuard],
    //este revisa que este atenticado siempre que cambie la pagina
    canActivate:[AuthGuard]
  },
  {
    path: "404",
    component: ErrorPageComponent,
  },
  {
    path: "**",
    redirectTo: "404"
  }

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
