import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  urlImagen: string = "";

  transform(heroe: Heroe): string {

    this.urlImagen = `../../../../assets/heroes/${heroe.id}.jpg`

    // if (heroe.alt_img == undefined) {
    //   this.urlImagen = '../../../assets/no-image.png';
    // }

    return this.urlImagen;
  }

}
