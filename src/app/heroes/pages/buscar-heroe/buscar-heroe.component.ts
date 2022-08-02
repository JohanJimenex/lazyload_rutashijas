import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html'
})
export class BuscarHeroeComponent implements OnInit {

  constructor(private heroeService: HeroesService) { }

  ngOnInit(): void {
  }

  termino: string = '';
  arrHeroes: Heroe[] = [ ];

  heroe!: Heroe;

  buscando(): void {
    this.heroeService.filtrarHeroes(this.termino.trim()).subscribe(resp => {
      this.arrHeroes = resp;
    })
  }

  // opcionSeleccionada(heroe: MatAutocompleteSelectedEvent): void {
  //   this.heroe = heroe.option.value;
    
  // }


}
