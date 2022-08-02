import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  private urlBase = environment.urlBase;

  obtenerTodosLosHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.urlBase + '/heroes');
  }

  consultarHeroe(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.urlBase}/heroes/${id}`);
  }

  filtrarHeroes(query: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.urlBase}/heroes?q=${query}&_limit=5`);
  }

  agregarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${this.urlBase}/heroes`, JSON.stringify(heroe),
      {
        headers: {
          "Content-Type": "application/json"
        }
      })
  }

  editarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(`${this.urlBase}/heroes/${heroe.id}`, heroe);
  }


}
