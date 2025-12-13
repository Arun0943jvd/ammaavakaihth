import { Router } from '@angular/router';
import { CartItem } from './../models/cart-item';
import { CommonModule } from '@angular/common';
import { CartService } from './../services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class CartComponent {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getAllCartItems();
  }

  increaseWeight(item: CartItem) {
    this.cartService.updateQty(item.id, item.weight + 1);
    this.loadCart();
  }

  decreaseWeight(item: CartItem) {
    if (item.weight > 1) {
      this.cartService.updateQty(item.id, item.weight - 1);
      this.loadCart();
    } else {
      this.removeItem(item);
    }
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item.id);
    this.loadCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.loadCart();
  }

  navigateTo() {
    this.router.navigate(['contact']);
  }
}
