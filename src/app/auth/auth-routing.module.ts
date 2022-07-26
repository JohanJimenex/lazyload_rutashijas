import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: "",//cuando entre a mi ruta raiz de este archivo, como no tiene un path, lo redirecciona
    // path: "auth/",
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registro',
        component: RegistroComponent
      },
      {
        path: '**',
        redirectTo: 'registro'
      }
    ]
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)//  solo tenemos un solo forRoot, y estas son rutas hijas
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
