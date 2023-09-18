import { Component } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css'],
})
export class LightboxComponent {
  closeLightbox() {
    let lightbox = document.getElementById('lightbox') as HTMLElement;
    lightbox.style.display = 'none';
  }
}
