import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import { Product } from '../app-state/entity';

import * as cartActions from '../app-state/actions';
import { cartItem } from '../app-state/entity/product.entity';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  carts:cartItem[] = [];
  constructor(private store:Store<AppState>) { 
    this.store.select('cart').subscribe((data) =>{
      this.carts = data.cartItems;
    })
  }

  ngOnInit(): void {
  }

  addToCart(item: Product) {
    this.store.dispatch(cartActions.addToCart({ product: item }));
  }

  removeFromCart(item: Product) {
    this.store.dispatch(cartActions.removeFromCart({ product: item }));
  }

  emptyCart(){
    this.store.dispatch(cartActions.emptyCart())
  }

}
