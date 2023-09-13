import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-cart',
  templateUrl: './icon-cart.component.html',
  styleUrls: ['./icon-cart.component.css'],
})
export class IconCartComponent {
  @Input() fill: string = '';
}
