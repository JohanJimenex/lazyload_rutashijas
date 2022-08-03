import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-consultar-heroe',
  templateUrl: './consultar-heroe.component.html',
  styles: [
    `
      img{
        border-radius: 5px;
      }
    `
  ]
})
export class ConsultarHeroeComponent implements OnInit {

  constructor(
    private heroeServices: HeroesService,
    private activatedRouter: ActivatedRoute,
    private _snackBar: MatSnackBar,

  ) { }

  heroe: Heroe = {
    superhero: '',
    publisher: '',
    alter_ego: '',
    first_appearance: '',
    characters: ''
  };

  ngOnInit(): void {

    this.activatedRouter.params.subscribe(({ id }: any) => {

      this.heroeServices.consultarHeroe(id).subscribe((resp: Heroe) => {
        this.heroe = resp;
      });
      
    })

    //Otra forma con el pipe de RxJs SwitchMap

    // this.activatedRouter.params
    //   .pipe(
    //     switchMap(({ id }) => this.heroeServices.consultarHeroe(id))
    //   )
    //   .subscribe(heroe => this.heroe = heroe);


  }


  //Otra forma desde el componente
  // importamos Router e injectamos servicio
  // constructos(private rutas: Router) { }

  // Regresar(): void {
  //   this.rutas.navigate(['/heroes/consultarheroes'])
  // }

}
