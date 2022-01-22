import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { routerReducer, RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  imports: [
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
    StoreModule.forFeature('router', routerReducer),
  ],
})
export class SharedDataAccessRouterModule {}
