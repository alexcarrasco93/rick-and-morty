import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RickAndMortyCharactersUiModule } from '@workspace/rick-and-morty/characters/ui';
import { RickAndMortyCharactersDataAccessModule } from '@workspace/rick-and-morty/characters/data-access';

import { CharactersListContainerComponent } from './characters-list-container/characters-list-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'characters-list',
        pathMatch: 'full',
        component: CharactersListContainerComponent,
      },
      { path: '**', redirectTo: 'characters-list' },
    ]),
    RickAndMortyCharactersUiModule,
    RickAndMortyCharactersDataAccessModule
  ],
  declarations: [CharactersListContainerComponent],
})
export class RickAndMortyCharactersFeatureModule {}
