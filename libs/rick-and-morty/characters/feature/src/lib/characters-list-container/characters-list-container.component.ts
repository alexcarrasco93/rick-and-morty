import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CharactersActions, CharactersSelectors } from '@workspace/rick-and-morty/characters/data-access';

@Component({
  selector: 'workspace-characters-list-container',
  templateUrl: './characters-list-container.component.html',
  styleUrls: ['./characters-list-container.component.scss'],
})
export class CharactersListContainerComponent implements OnInit {
  charactersViewModel$ = this.store.select(CharactersSelectors.charactersViewModel)
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(CharactersActions.eneterCharactersPage());
  }
}
