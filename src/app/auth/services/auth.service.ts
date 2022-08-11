import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  private urlBase: string = environment.urlBase;

  private _auth: IUsuario | undefined;

  // get auth(): IUsuario | undefined {
  //   return this._auth;
  // }

  // otra forma para desestructurar el objeto compelto para crear una copia
  get auth(): IUsuario {
    return { ...this._auth! };
  }

  iniciarSesion(): Observable<IUsuario> {
    return this.http.get<IUsuario>(`${this.urlBase}/usuarios/1`)
      .pipe(
        tap((resp: IUsuario) => {
          console.log('desde el iniciar sesion');

          localStorage.setItem('token', resp.id.toString());

          this._auth = resp;
        })
      );
  }

  cerrarSesion() {
    this._auth = undefined;
    localStorage.clear();
  }

  //puede devolver un observable o un booleano, con of()
  yaEstaAutenticado(): Observable<boolean> | boolean {

    if (!localStorage.getItem('token')) {
      return false;
      // return of(false);
    }
    //el .pipe( map() ) sirve para trasnformar lo que sea que recibe en un nuevo valor

    this.iniciarSesion().subscribe();

    return true;


    // return of(true);
  }

}
