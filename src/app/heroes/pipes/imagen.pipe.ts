import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  urlImagen: string = "";

  transform(heroe: Heroe): string {

    if (heroe.id == undefined) {
      this.urlImagen = 'assets/no-image.png';

    } else if (heroe.alt_img != undefined) {
      this.urlImagen = heroe.alt_img;

    } else {
      this.urlImagen = `assets/heroes/${heroe.id}.jpg`

    }

    return this.urlImagen;
  }

}
