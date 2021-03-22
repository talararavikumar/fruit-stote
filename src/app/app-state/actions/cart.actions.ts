import { createAction, props } from '@ngrx/store';
import { Product } from '../entity';
import { cartItem } from '../entity/product.entity';

export const GET_CART_ITEMS = '[CART] GET CART ITEMS';
export const GET_CART_ITEMS_SUCCESS = '[CART] GET CART ITEMS Success';
export const GET_CART_ITEMS_FAILURE = '[CART] GET CART ITEMS Failure';

export const ADD_TO_CART = '[CART] ADD TO CART';
export const ADD_TO_CART_SUCCESS = '[CART] ADD TO CART Success';
export const ADD_TO_CART_FAILURE = '[CART] ADD TO CART Failure';

export const REMOVE_FROM_CART = '[CART] REMOVE FROM CART';
export const REMOVE_FROM_CART_SUCCESS = '[CART] REMOVE FROM CART Success';
export const REMOVE_FROM_CART_FAILURE = '[CART] REMOVE FROM CART Failure';



export const getCartItems = createAction(
  GET_CART_ITEMS
);

export const getCartItemsSuccess = createAction(
  GET_CART_ITEMS_SUCCESS,
  props<any>()
);

export const getCartItemsFailure = createAction(
  GET_CART_ITEMS_FAILURE,
  props<any>()
);

export const addToCart = createAction(
  ADD_TO_CART,
  props<{product: Product}>()
);

export const addToCartSuccess = createAction(
  ADD_TO_CART_SUCCESS,
  props<any>()
);

export const addToCartFailure = createAction(
  ADD_TO_CART_FAILURE,
  props<any>()
);

export const removeFromCart = createAction(
  REMOVE_FROM_CART,
  props<{product: Product}>()
);

export const removeFromCartSuccess = createAction(
  REMOVE_FROM_CART_SUCCESS,
  props<any>()
);

export const removeFromCartFailure = createAction(
  REMOVE_FROM_CART_FAILURE,
  props<any>()
);

export const emptyCart = createAction('Empty_CART');
