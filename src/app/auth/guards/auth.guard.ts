import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authServices: AuthService,
    private router: Router
  ) { }

  // //Recuerda que es opcionnal retornar difernetes tipos |  | puede ser uno 
  // canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

  //   if (this.authServices.yaEstaAutenticado() == false) {
  //     this.router.navigate(['/auth/login'])
  //     return false;
  //   }

  //   return true;

  //   // return this.authServices.auth.id ? true : false;
  //   // return of(this.authServices.auth.id ? true : false); //con of() retornamos un Observable
  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authServices.yaEstaAutenticado() == false) {
      this.router.navigate(['/auth/login'])
      console.log("es falso no esta logeado porque no existe el token en localhost");
      return false;
      
    }
    
    console.log("es true existe el token en localhost");
    return true;
    // return this.authServices.auth.id ? true : false;
  }


}
