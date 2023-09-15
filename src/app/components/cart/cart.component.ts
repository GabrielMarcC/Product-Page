import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/data/productData';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  items: IProduct[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  deleteProduct(product: IProduct) {
    this.cartService.deleteProduct(product);
  }
}
