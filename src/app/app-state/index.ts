import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as fromUser from './reducers/user.reducer'
import * as fromCart from './reducers/cart.reducer';
import * as fromProducts from './reducers/products.reducer'

export interface AppState {
  user:fromUser.userState
  cart: fromCart.cartState;
  products:fromProducts.productSate
}

export const appreducer ={
  user:fromUser.userreducer,
  cart:fromCart.cartreducer,
  products:fromProducts.productReducer
}
 
//export const getCartState = createFeatureSelector<fromCart.cartState>('cart');
//export const getProductsState = createFeatureSelector<fromProducts.productSate>('products');

// export const getProductsSelector= createSelector(
//   getProductsState,
//   (productsState)=> productsState.products
// );

// export const getCartItemsSelector = createSelector(
//   getCartState,
//   (cartState)=> cartState.cartItems
// );

