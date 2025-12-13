import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product';

import products from '../../assets/data/products.json';
@Component({
  selector: 'app-powders',
  imports: [CommonModule, ProductComponent],
  templateUrl: './powders.html',
  styleUrl: './powders.scss',
})
export class PowdersComponent {
  items: any[] = [];

  ngOnInit() {
    this.items = products.powders;
  }
}
