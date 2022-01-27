import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RickAndMortyCharactersUiModule } from '@workspace/rick-and-morty/characters/ui';
import { RickAndMortyCharactersDataAccessModule } from '@workspace/rick-and-morty/characters/data-access';
import { APP_ROUTES } from '@workspace/rick-and-morty/shared/util/models';

import { CharactersListContainerComponent } from './characters-list-container/characters-list-container.component';
import { CharacterDetailContainerComponent } from './character-detail-container/character-detail-container.component';
import { PageNotFoundContainerComponent } from './page-not-found-container/page-not-found-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: APP_ROUTES.LIBS.RICK_AND_MORTY.CHARACTERS.LIST.path,
        pathMatch: 'full',
        component: CharactersListContainerComponent,
      },
      {
        path: APP_ROUTES.LIBS.RICK_AND_MORTY.CHARACTERS.DETAIL.path,
        pathMatch: 'full',
        component: CharacterDetailContainerComponent,
      },
      {
        path: APP_ROUTES.LIBS.RICK_AND_MORTY.CHARACTERS.PAGE_NOT_FOUND.path,
        pathMatch: 'full',
        component: PageNotFoundContainerComponent,
      },
      {
        path: '',
        redirectTo: APP_ROUTES.LIBS.RICK_AND_MORTY.CHARACTERS.LIST.path,
      },
      {
        path: '**',
        redirectTo:
          APP_ROUTES.LIBS.RICK_AND_MORTY.CHARACTERS.PAGE_NOT_FOUND.path,
      },
    ]),
    RickAndMortyCharactersUiModule,
    RickAndMortyCharactersDataAccessModule,
  ],
  declarations: [
    CharactersListContainerComponent,
    CharacterDetailContainerComponent,
    PageNotFoundContainerComponent,
  ],
})
export class RickAndMortyCharactersFeatureModule {}
