import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product';

import products from '../../assets/data/products.json';
@Component({
  selector: 'app-dryitems',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './dryitems.html',
  styleUrl: './dryitems.scss',
})
export class DryfoodComponent {
  items: any[] = [];

  ngOnInit() {
    this.items = products.dry_items;
  }
}
