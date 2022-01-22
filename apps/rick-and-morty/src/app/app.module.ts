import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { SharedDataAccessRouterModule } from '@workspace/shared/data-access/router';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@workspace/rick-and-morty/characters/feature').then(
        (m) => m.RickAndMortyCharactersFeatureModule
      ),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: { strictActionImmutability: true, strictStateImmutability: true },
        metaReducers: [],
      },
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    SharedDataAccessRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
