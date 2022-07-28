import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-todos-heroes',
  templateUrl: './todos-heroes.component.html'
})
export class TodosHeroesComponent implements OnInit {

  constructor(private heroeServices: HeroesService) { }

  arrHeroes: Heroe[] = [];

  ngOnInit(): void {
    this.heroeServices.obtenerTodosLosHeroes().subscribe((resp: Heroe[]) => {
     this.arrHeroes = resp;
    })
  }



}
