import { Action, createReducer, on } from '@ngrx/store';
import { Product } from '../entity';
import * as cartItemActions from '../actions';
import { cartItem } from '../entity/product.entity';
import { state } from '@angular/animations';
import* as _ from 'lodash';

export interface cartState {
  cartItems: cartItem[];
  result?: any;
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
}

const initialState: cartState = {
  cartItems: [],
  result: '',
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};

const _cartReducer = createReducer(
  initialState,

  // GeTasks
  on(cartItemActions.getCartItems, (state) => ({ ...state, isLoading: true })),


  // Create Task Reducers
  on(cartItemActions.getCartItemsSuccess, (state, action) => {

    console.log('in reducer getCartItemsSuccess' + action);
    return {
      ...state, cartItems: action.products
      // cartItems:response,
      // isLoading: false,
      // isLoadingSuccess: true
    };
  }),

  // Create Task Reducers
  on(cartItemActions.addToCart, (state, { product }) => {

    let cartItem = state.cartItems.find(item => item.name === product.name);

    let cartItems:cartItem[] = [...state.cartItems];
    
    if (cartItem) {
      cartItems = _.cloneDeep(state.cartItems);
      //cartItems = state.cartItems.filter(item => item.name !== product.name);
      cartItems.map((cartItem)=>{
        if(cartItem.name === product.name){
          cartItem.qty = cartItem.qty + 1
        }
      })
    }
    else {
      cartItem = { ...product, qty: 1 };
      cartItems.push(cartItem);
    }

    
    return {
      ...state,
      cartItems: cartItems,
      isLoading: false,
      isLoadingSuccess: true
    };
  }),

  // Delete Task Reducers
  on(cartItemActions.removeFromCart, (state, { product }) => {
    //[...state.cartItems, product];

    let cartItem = state.cartItems.find(item => item.name === product.name);

    let cartItems:cartItem[] = [...state.cartItems];
    
    if (cartItem && cartItem.qty > 1) {
      cartItems = _.cloneDeep(state.cartItems);
      //cartItems = state.cartItems.filter(item => item.name !== product.name);
      cartItems.map((cartItem)=>{
        if(cartItem.name === product.name){
          cartItem.qty = cartItem.qty - 1;
        }
      })
    }
    else {
      cartItems = [...state.cartItems.filter(item => item.name !== product.name)]; 
    }
    return {
      ...state,
      cartItems: cartItems,
      isLoading: false,
      isLoadingSuccess: true
    };
  }),

  // Delete Task Reducers
  on(cartItemActions.emptyCart, (state) => {
    return {
      ...state,
      cartItems: [],
      isLoading: false,
      isLoadingSuccess: true
    };
  }),

);

export function cartreducer(state: cartState, action: Action): any {
  return _cartReducer(state, action);
}
