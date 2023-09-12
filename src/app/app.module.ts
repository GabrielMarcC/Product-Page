import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardLeftComponent } from './components/card-left/card-left.component';
import { CardRightComponent } from './components/card-right/card-right.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { CartComponent } from './components/cart/cart.component';
import { IconModule } from './icons/icon.module';

@NgModule({
  declarations: [
    AppComponent,
    CardLeftComponent,
    CardRightComponent,
    HomeComponent,
    MenuComponent,
    DrawerComponent,
    CartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, IconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
