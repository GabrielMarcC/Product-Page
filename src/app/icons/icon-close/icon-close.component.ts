import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-close',
  templateUrl: './icon-close.component.html',
})
export class IconCloseComponent {
  @Input() fill: string = '';
}
