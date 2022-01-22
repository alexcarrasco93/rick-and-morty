import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
      { path: '**', redirectTo: 'characters-list' }
    ]),
  ],
  declarations: [
    CharactersListContainerComponent
  ],
})
export class RickAndMortyCharactersFeatureModule {}
