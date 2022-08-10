import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/auth/interfaces/usuario.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent {

  constructor(private rutas: Router, private authServices: AuthService) { }

  get auth(): IUsuario {
    return this.authServices.auth!;
  }

  logOut() {
    this.authServices.cerrarSesion();
    this.rutas.navigate(['/auth'])
  }

} 
