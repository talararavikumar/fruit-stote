import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../app-state/entity';
import * as todoActions from '../app-state/actions';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as fromRoot from '../app-state';
import { AppState } from '../app-state';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly store: Store<AppState>) {
    this.store.select('products').pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      //console.log('HomeComponent ' + data);
      this.items = data.products;
    });
   }

  destroy$: Subject<boolean> = new Subject<boolean>();
  items: Product[] = [];

  ngOnInit() {
    this.store.dispatch(todoActions.getProudcts());
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
