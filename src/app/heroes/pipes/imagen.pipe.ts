import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  urlImagen: string = "";

  transform(heroe: Heroe): string {

    if (heroe.alt_img == "") {
      this.urlImagen = 'assets/no-image.png';
    }

    if (heroe.id != undefined && heroe.alt_img != '' && heroe.alt_img != undefined) {
      this.urlImagen = heroe.alt_img;
    }

    if (heroe.id != undefined && heroe.alt_img == undefined) {
      this.urlImagen = `assets/heroes/${heroe.id}.jpg`
    }

    return this.urlImagen;
  }

}
