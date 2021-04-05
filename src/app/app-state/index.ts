import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromUser from './reducers/user.reducer'
import * as fromCart from './reducers/cart.reducer';
import * as fromProducts from './reducers/products.reducer'
import { localStorageSync } from 'ngrx-store-localstorage';

export interface AppState {
  user:fromUser.userState
  cart: fromCart.cartState;
  products:fromProducts.productSate
}

// export const appreducer ={
//   user:fromUser.userreducer,
//   cart:fromCart.cartreducer,
//   products:fromProducts.productReducer
// }

export const appreducer: ActionReducerMap<AppState> = {
  user:fromUser.userreducer,
  cart:fromCart.cartreducer,
  products:fromProducts.productReducer
};

const reducerKeys = ['user', 'cart', 'products'];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: reducerKeys,  rehydrate: true})(reducer);
}

export const metaReducers: MetaReducer<AppState>[] = [localStorageSyncReducer];
 


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

