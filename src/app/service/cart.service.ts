import { Injectable } from '@angular/core';
import { IProduct } from '../data/productData';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IProduct[] = [];
  constructor() {}

  addToCart(product: IProduct) {
    this.items.push(product);
    console.log(this.items);
  }

  getItems() {
    return this.items;
  }

  deleteProduct(product: IProduct) {
    for (let i of this.items) {
      if (i.id === product.id) {
        this.items.splice(0, 1);
      }
    }
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
