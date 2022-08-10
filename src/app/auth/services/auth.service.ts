import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

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
          console.log(resp);

          this._auth = resp;
        })
      );
  }

  cerrarSesion() {
    this._auth = undefined;
  }


}
