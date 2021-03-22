import { createAction, props } from "@ngrx/store";

export const getProudcts =  createAction('[GET PRODUCTS] products page');
export const getProudctsSuccess = createAction('[GET PRODUCTS SUCCESS] products page', props<any>());
export const getProudctsFailure = createAction('[GET PRODUCTS FAILURE] products page');