import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product';

import products from '../../assets/data/products.json';
@Component({
  selector: 'app-snacks',
  imports: [CommonModule, ProductComponent],
  templateUrl: './snacks.html',
  styleUrl: './snacks.scss',
})
export class SnacksComponent {
  items: any[] = [];

  ngOnInit() {
    this.items = products.hot_items;
  }
}
