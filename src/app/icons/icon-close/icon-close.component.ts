import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-close',
  templateUrl: './icon-close.component.html',
  styleUrls: ['./icon-close.component.css'],
})
export class IconCloseComponent {
  @Input() fill: string = '';
}
