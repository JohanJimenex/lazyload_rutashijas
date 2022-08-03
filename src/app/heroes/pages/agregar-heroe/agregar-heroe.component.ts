import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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
    private ruta: Router,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({ id }) => {

      // if (id != ':id') {
      //   this.heroe.id = id
      // }
      this.heroeServices.consultarHeroe(id).subscribe(resp => {
        this.heroe = resp;

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
    alt_img: ''
  };

  guardar(): void {

    console.log('');


    if (this.heroe.superhero.trim().length == 0) {
      this._snackBar.open('Debe llenar los campos obligatorios', 'Aceptar');

      return;
    }

    if (this.heroe.id == undefined) {

      this.heroeServices.agregarHeroe(this.heroe).subscribe((resp: Heroe) => {
        this.MensajeSnackBar();
        this.ruta.navigate(['heroes/' + resp.id])
      });

    } else {
      this.heroeServices.editarHeroe(this.heroe).subscribe(resp => {
        this.MensajeSnackBar()
      })
    }


  }

  MensajeSnackBar(): void {

    if (this.heroe.id == undefined) {
      this.mensaje = 'Personaje creado';

    } else if (this.heroe.id != undefined) {
      this.mensaje = 'Personaje actualizado'

    } else if (this.heroe.id != undefined) {
      this.mensaje = 'Personaje actualizado'

    } else {
      this.mensaje = 'Error al crear personaje'
    }

    this._snackBar.open(this.mensaje, 'Aceptar');

  }

  borrar(): void {
    this.heroeServices.borrarHeroe(this.heroe).subscribe(resp => {
      console.log(resp);
      this._snackBar.open('Personaje eliminado', 'Aceptar');
      this.ruta.navigate(['heroes/'])


    })
  }



}
