import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar-heroe',
  templateUrl: './agregar-heroe.component.html'
})
export class AgregarHeroeComponent implements OnInit {

  constructor(
    private heroeServices: HeroesService,
    private _snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({ id }) => {

      // if (id != ':id') {
      //   this.heroe.id = id
      // }
      this.heroeServices.editarHeroe(id).subscribe(resp =>{

      })
    })

  }

  mensaje: string = '';

  heroe: Heroe = {
    superhero: '',
    publisher: '',
    alter_ego: '',
    first_appearance: '',
    characters: '',
  };

  guardar(): void {

    if (this.heroe.superhero.trim().length == 0) {
      this._snackBar.open('Debe llenar los campos obligatorios', 'Aceptar');

      return;
    }

    this.heroeServices.agregarHeroe(this.heroe).subscribe((resp: Heroe) => {
      if (resp.superhero != undefined) {
        this.mensaje = 'Usuario creado';
      } else {
        this.mensaje = 'Error al crear usuario'
      }

      this._snackBar.open(this.mensaje, 'Aceptar');

    });
  }




}
