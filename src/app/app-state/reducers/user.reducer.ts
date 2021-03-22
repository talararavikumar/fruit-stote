import { Action, createReducer, on } from '@ngrx/store';
import { Product } from '../entity';
import * as cartItemActions from '../actions';
import { User } from '../entity/user.entity';

export interface userState {
  user: User;
  result?: any;
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
}

const initialState: userState = {
  user: {name:'ravikumar',email:'ravikumar.nitw@gmail.com'},
  result: '',
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};

const _userReducer = createReducer(
  initialState,
);

export function userreducer(state: userState , action: Action): any {
  return _userReducer(state, action);
}