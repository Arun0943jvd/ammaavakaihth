import { CartService } from './../services/cart.service';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, AsyncPipe],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  cartCount$:any;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartCount$ = this.cartService.cartCount$;
  }
}
