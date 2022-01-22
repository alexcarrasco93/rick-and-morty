import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

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
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
