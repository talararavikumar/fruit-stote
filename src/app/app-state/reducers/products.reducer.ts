import { createReducer, on, Action } from "@ngrx/store";
import { getProudcts, getProudctsSuccess } from "../actions";
import { Product } from "../entity";

export interface productSate{
    products:Product[],
    isLoading:boolean,
    isLoadingSuccess:boolean
}

const initialState:productSate = {
    products:[],
    isLoading:false,
    isLoadingSuccess:false
}
const _productReducer = createReducer(initialState,
    on(getProudcts, (state)=>{
    return {
        ...state,
        isLoading:true
    }}),

    on(getProudctsSuccess, (state, action)=>{
        return {
            ...state,
            products:action.products,
            isLoading:false
        }
    })
);

export function productReducer (state:productSate, action:Action):any{
    return _productReducer(state, action);
}