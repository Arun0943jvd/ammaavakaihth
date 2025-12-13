import { CartItem } from './../models/cart-item';
import { CartService } from './../services/cart.service';
import { Component, Input } from '@angular/core';
import { ProductItem } from './../models/product-item';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-product',
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatSelectModule],
  standalone: true,
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class ProductComponent {
  @Input() product: ProductItem = {
    id: '',
    name: '',
    desc: '',
  };
  weights = [
    { label: '½ Kg', value: 0.5 },
    { label: '1 Kg', value: 1 },
    { label: '2 Kg', value: 2 },
    { label: '3 Kg', value: 3 },
    { label: '4 Kg', value: 4 },
    { label: '5 Kg', value: 5 },
    { label: '6 Kg', value: 6 },
    { label: '7 Kg', value: 7 },
    { label: '8 Kg', value: 8 },
    { label: '9 Kg', value: 9 },
    { label: '10 Kg', value: 10 },
  ];
  selectedWeight = 1;

  constructor(private cartService: CartService, private notificationService: NotificationService) {}

  addToCart(product: ProductItem, weight: any) {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      weight: this.selectedWeight,
      qty: 1
    };
    this.cartService.addToCart(cartItem);

    this.notificationService.show(`${product.name} has been added to the cart!`, 'success');
  }
}
