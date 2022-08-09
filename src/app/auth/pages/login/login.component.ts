import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private rutas: Router,
    private authServices: AuthService
  ) { }

  logIn(): void {

    this.authServices.iniciarSesion().subscribe(resp => {
      if (resp.id) {
        this.rutas.navigate(['/heroes'])
      }
    });
  }

}
