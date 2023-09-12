import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconCartComponent } from './icon-cart/icon-cart.component';
import { IconDeleteComponent } from './icon-delete/icon-delete.component';
import { IconLogoComponent } from './icon-logo/icon-logo.component';
import { IconMenuComponent } from './icon-menu/icon-menu.component';
import { IconCloseComponent } from './icon-close/icon-close.component';
import { IconMinusComponent } from './icon-minus/icon-minus.component';
import { IconNextComponent } from './icon-next/icon-next.component';
import { IconPlusComponent } from './icon-plus/icon-plus.component';
import { IconPreviousComponent } from './icon-previous/icon-previous.component';

@NgModule({
  declarations: [
    IconCartComponent,
    IconDeleteComponent,
    IconLogoComponent,
    IconMenuComponent,
    IconCloseComponent,
    IconMinusComponent,
    IconNextComponent,
    IconPlusComponent,
    IconPreviousComponent,
  ],
  exports: [
    IconCartComponent,
    IconDeleteComponent,
    IconLogoComponent,
    IconMenuComponent,
    IconCloseComponent,
    IconMinusComponent,
    IconNextComponent,
    IconPlusComponent,
    IconPreviousComponent,
  ],
  imports: [CommonModule],
})
export class IconModule {}
