import { Injectable } from '@angular/core';
import { IProduct } from '../data/productData';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IProduct[] = [];
  amount: number = 0;
  constructor() {}

  addToCart(product: IProduct) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  deleteProduct(product: IProduct) {
    const index = this.items.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
