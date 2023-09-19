import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-cart',
  templateUrl: './icon-cart.component.html',
})
export class IconCartComponent {
  @Input() fill: string = '';
}
