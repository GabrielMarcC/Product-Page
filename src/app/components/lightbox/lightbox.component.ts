import { Component } from '@angular/core';
import { imgData } from 'src/app/data/imgData';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
})
export class LightboxComponent {
  imgBg = imgData.map((image) => image.imgBg);
  imgTb = imgData.map((image) => image.imgThumb);

  closeLightbox() {
    let lightbox = document.getElementById('lightbox') as HTMLElement;
    lightbox.style.display = 'none';
  }

  nextSlide(i: number) {
    if (i === 0 || i === 3) {
      return i++;
    }
    if (i === 1 || i === 4) {
      return i--;
    }
    return i;
  }
}
