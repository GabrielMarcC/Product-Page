import { Component } from '@angular/core';
import { imgData } from 'src/app/data/imgData';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  selectedIndex = '0';
  images = [...imgData];

  setId(id: number) {
    this.selectedIndex = `#${id}`;
  }
}
