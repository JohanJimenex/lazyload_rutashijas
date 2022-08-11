import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConfirmComponent } from '../../components/dialog-confirm/dialog-confirm.component';
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
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({ id }) => {

      if (id != undefined) {
        this.heroeServices.consultarHeroe(id).subscribe(resp => {
          this.heroe = resp;
        })
      }

    })

  }

  private mensaje: string = '';

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

    this.regresar();


  }

  private MensajeSnackBar(): void {

    if (this.heroe.id == undefined) {
      this.mensaje = 'Personaje creado';

    } else if (this.heroe.id != undefined) {
      this.mensaje = 'Personaje actualizado'

    } else if (this.heroe.id != undefined) {
      this.mensaje = 'Personaje actualizado'

    } else {
      this.mensaje = 'Error al crear personaje'
    }

    this._snackBar.open(this.mensaje, 'Ok', {
      duration: 2000
    });

  }

  borrar(): void {

    const dialogo = this.dialog.open(DialogConfirmComponent, {
      width: '20rem',
      data: { ...this.heroe }//con esto enviamos al componente hijo "dialogRef" una copia de heroe, se puede enviar el objeto original tambien
    });

    //despues de cerrar recibimos lo que sea que se haya mandado por .close('klk') desde el component dialog confirm
    dialogo.afterClosed().subscribe((resp: any) => {
      resp ? this.confirmarEliminacion() : false;
    });
  }

  private confirmarEliminacion(): void {

    this.heroeServices.borrarHeroe(this.heroe).subscribe(resp => {
      this._snackBar.open('Personaje eliminado', 'Ok', { duration: 2000 });
      this.regresar();
    })
  }

  regresar(): void {
    this.ruta.navigate(['heroes/'])
  }

}
