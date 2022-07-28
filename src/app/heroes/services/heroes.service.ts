import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  private urlBase = 'http://localhost:3000';

  obtenerTodosLosHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.urlBase + '/heroes');
  }

  
}
