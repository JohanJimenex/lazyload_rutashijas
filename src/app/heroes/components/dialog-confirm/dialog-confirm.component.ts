import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroe';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.css']
})
export class DialogConfirmComponent implements OnInit {


  //este servicio nos permite mandar la referencia al componente que llame a 
  //this.dialogo.open(), el tipo es el nombre del otro compoente como lo nombramos
  constructor(
    private dialogRef: MatDialogRef<DialogConfirmComponent>,
    //Recibimos la data quien sea que la envie , es publica y la podemos usar en el html, solo eso
    @Inject(MAT_DIALOG_DATA) public datos: Heroe
  ) { }

  ngOnInit(): void {
  }

  cancelar() {
    this.dialogRef.close(false);
    // this.dialogRef.close();
  }

  borrar() {
    this.dialogRef.close(true);
  }

}
