import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharactersListComponent } from './characters-list/characters-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CharacterCardComponent,
    CharactersListComponent
  ],
})
export class RickAndMortyCharactersUiModule {}
