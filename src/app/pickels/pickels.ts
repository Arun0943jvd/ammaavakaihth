import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product';

import products from '../../assets/data/products.json';

@Component({
  selector: 'app-pickels',
  imports: [CommonModule, ProductComponent],
  templateUrl: './pickels.html',
  styleUrl: './pickels.scss',
})
export class PickelsComponent {
  items: any[] = [];

  ngOnInit() {
    this.items = products.pickles;
  }
}
