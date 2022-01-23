import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RickAndMortyCharactersUiModule } from '@workspace/rick-and-morty/characters/ui';
import { RickAndMortyCharactersDataAccessModule } from '@workspace/rick-and-morty/characters/data-access';

import { CharactersListContainerComponent } from './characters-list-container/characters-list-container.component';
import { CharacterDetailContainerComponent } from './character-detail-container/character-detail-container.component';
import { PageNotFoundContainerComponent } from './page-not-found-container/page-not-found-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'characters-list',
        pathMatch: 'full',
        component: CharactersListContainerComponent,
      },
      {
        path: 'character-detail/:characterId',
        pathMatch: 'full',
        component: CharacterDetailContainerComponent,
      },
      {
        path: 'page-not-found',
        pathMatch: 'full',
        component: PageNotFoundContainerComponent,
      },
      { path: '', redirectTo: 'characters-list' },
      { path: '**', redirectTo: 'page-not-found' },
    ]),
    RickAndMortyCharactersUiModule,
    RickAndMortyCharactersDataAccessModule
  ],
  declarations: [CharactersListContainerComponent, CharacterDetailContainerComponent, PageNotFoundContainerComponent],
})
export class RickAndMortyCharactersFeatureModule {}
