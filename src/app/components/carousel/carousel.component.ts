import { Component, OnInit } from '@angular/core';
import { imgData } from 'src/app/data/imgData';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  imgBg = imgData.map((image) => image.imgBg);
  imgTb = imgData.map((image) => image.imgThumb);
  id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((response) => (this.id = response.get('id')));
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

  openLightbox() {
    let lightbox = document.getElementById('lightbox') as HTMLElement;
    lightbox.style.display = 'flex';
  }
}
