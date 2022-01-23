import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CharacterCardComponent } from './character-card/character-card.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersFiltersComponent } from './characters-filters/characters-filters.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    CharacterCardComponent,
    CharactersListComponent,
    CharactersFiltersComponent,
  ],
  exports: [CharactersListComponent],
})
export class RickAndMortyCharactersUiModule {}
