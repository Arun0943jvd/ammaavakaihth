import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product';

import products from '../../assets/data/products.json';
@Component({
  selector: 'app-sweets',
  imports: [CommonModule, ProductComponent],
  templateUrl: './sweets.html',
  styleUrl: './sweets.scss',
})
export class SweetsComponent {
  items: any[] = [];

  ngOnInit() {
    this.items = products.sweets;
  }
}
