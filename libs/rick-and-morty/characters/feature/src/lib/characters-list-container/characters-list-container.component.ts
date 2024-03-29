import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  CharactersActions,
  CharactersSelectors,
} from '@workspace/rick-and-morty/characters/data-access';
import { CharactersFilters } from '@workspace/rick-and-morty/characters/ui-models';
import { APP_ROUTES } from '@workspace/rick-and-morty/shared/util/models';

@Component({
  selector: 'c-characters-list-container',
  templateUrl: './characters-list-container.component.html',
  styleUrls: ['./characters-list-container.component.scss'],
})
export class CharactersListContainerComponent implements OnInit {
  charactersViewModel$ = this.store.select(
    CharactersSelectors.charactersViewModel
  );
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(CharactersActions.eneterCharactersPage());
  }

  requestNextCharacters() {
    this.store.dispatch(CharactersActions.loadNextCharacters());
  }

  requestPreviousCharacters() {
    this.store.dispatch(CharactersActions.loadPrevCharacters());
  }

  filterCharacters(filters: CharactersFilters) {
    this.store.dispatch(CharactersActions.filterCharacters({ filters }));
  }

  goToCharacterDetail(characterId: number) {
    this.router.navigate([
      APP_ROUTES.LIBS.RICK_AND_MORTY.CHARACTERS.DETAIL.fullPath,
      characterId,
    ]);
  }
}
