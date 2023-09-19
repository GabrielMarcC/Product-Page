import { Component, OnInit, OnChanges } from '@angular/core';
import { IProduct } from 'src/app/data/productData';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  items: IProduct[] = [];
  amount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.updateCartItems();
  }

  deleteProduct(product: IProduct) {
    this.cartService.deleteProduct(product);
    this.updateCartItems();
  }

  private updateCartItems() {
    this.items = this.cartService.getItems();
    this.amount = this.items.length;
  }
}
