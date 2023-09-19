import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardLeftComponent } from './components/card-left/card-left.component';
import { CardRightComponent } from './components/card-right/card-right.component';
import { MenuComponent } from './components/menu/menu.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { CartComponent } from './components/cart/cart.component';
import { IconModule } from './icons/icon.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CardLeftComponent,
    CardRightComponent,
    ProductPageComponent,
    MenuComponent,
    DrawerComponent,
    CartComponent,
    CarouselComponent,
    LightboxComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, IconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
