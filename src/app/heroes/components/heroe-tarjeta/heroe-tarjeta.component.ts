import { Component, Input, } from '@angular/core';
import { Heroe } from '../../interfaces/heroe';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent {



  @Input() heroe!: Heroe ;


  // @Input() heroe: Heroe = {
  //   superhero: '',
  //   publisher: '',
  //   alter_ego: '',
  //   first_appearance: '',
  //   characters: ''
  // };





}
