// src/app/product/product.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import * as cartActions from '../app-state/actions';
import { Product } from '../app-state/entity/product.entity';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private store: Store<AppState>, private router:Router) {
    
   }

  inCart: boolean = false;
  @Input() public product!: Product;

  addToCart(item: Product) {
    this.store.dispatch(cartActions.addToCart({ product: item }));
    this.inCart = true;
    this.router.navigate(['/cart'])
  }

  removeFromCart(item: Product) {
    this.store.dispatch(cartActions.removeFromCart({ product: item }));
    this.inCart = false;
  }
  ngOnInit() { }
}
