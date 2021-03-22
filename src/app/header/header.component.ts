import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppState } from '../app-state';
import { Product } from '../app-state/entity';
    
    @Component({
      selector: 'app-header',
      templateUrl: './header.component.html',
      styleUrls: ['./header.component.scss']
    })
    export class HeaderComponent implements OnInit {
      constructor(private store:Store<AppState>, private route:Router) {
        this.store.select('cart').pipe(takeUntil(this.destroy$)).subscribe(data =>{
          this.cart = data.cartItems;
        })
      }
    
      destroy$: Subject<boolean> = new Subject<boolean>();
      cart:Product[] = [];
      ngOnInit() {}

      ngOnDestroy(){
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
      }

      efnHomeClick(){
        this.route.navigate(['']);
      }

      efnCartClick(){
        this.route.navigate(['cart']);
      }
    }
