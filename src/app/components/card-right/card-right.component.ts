import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { IProduct, Product } from 'src/app/data/productData';

@Component({
  selector: 'app-card-right',
  templateUrl: './card-right.component.html',
})
export class CardRightComponent {
  newId: number = 1;
  products = [...Product];

  constructor(private cartService: CartService) {}

  incrementQuantity(product: IProduct) {
    for (const p of this.products) {
      if (p.id === product.id) {
        p.amount++;
      }
    }
  }

  decrementQuantity(product: IProduct) {
    for (const p of this.products) {
      if (product.amount > 0 && p.id === product.id) {
        p.amount--;
      }
    }
  }

  addToCart(product: IProduct) {
    const newProduct: IProduct = {
      ...product,
      id: this.newId++,
      amount: product.amount,
    };
    this.cartService.addToCart(newProduct);
  }
}
