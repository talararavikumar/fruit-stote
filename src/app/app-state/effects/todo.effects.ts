import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { FruitsService } from '../../services/fruits.service';
import * as fruitstoreActions from '../actions';

@Injectable()
export class TodoEffects {

  constructor(
    private actions$: Actions,
    private fruitsService: FruitsService
  ) {}

  getTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fruitstoreActions.getProudcts),
      exhaustMap(action =>
        this.fruitsService.getAll().pipe(
          map(response => {
            console.log("response:::", response)
            return fruitstoreActions.getProudctsSuccess({products:response})
          }),
          catchError((error: any) => of(fruitstoreActions.getProudctsFailure())))
      )
    )
  );
}
