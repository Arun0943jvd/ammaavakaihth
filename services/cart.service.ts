import { CartItem } from './../models/cart-item';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];

  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  constructor() {}

  // Add or increment item
  addToCart(product: CartItem) {
    const existing = this.cartItems.find((p) => p.id === product.id);

    if (existing) {
      existing.qty += 1;
    } else {
      this.cartItems.push({ ...product, qty: 1 });
    }

    this.updateCount();
  }

  // Update quantity of a specific item
  updateQty(productId: string, qty: number) {
    const item = this.cartItems.find((p) => p.id === productId);
    if (item) {
      item.weight = qty > 0 ? qty : 1; // prevent zero or negative qty
      this.updateCount();
    }
  }

  // Remove a specific item
  removeItem(productId: string) {
    this.cartItems = this.cartItems.filter((p) => p.id !== productId);
    this.updateCount();
  }

  // Clear all items
  clearCart() {
    this.cartItems = [];
    this.updateCount();
  }

  // Get all items
  getAllCartItems() {
    return this.cartItems;
  }

  // Update total item count
  private updateCount() {
    const total = this.cartItems.reduce((sum, item) => sum + item.qty, 0);
    this.cartCountSubject.next(total);
  }
}
