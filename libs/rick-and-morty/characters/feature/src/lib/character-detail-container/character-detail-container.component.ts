import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  CharactersActions,
  CharactersSelectors,
} from '@workspace/rick-and-morty/characters/data-access';

@Component({
  selector: 'workspace-character-detail-container',
  templateUrl: './character-detail-container.component.html',
  styleUrls: ['./character-detail-container.component.scss'],
})
export class CharacterDetailContainerComponent implements OnInit {
  characterDetailViewModel$ = this.store.select(
    CharactersSelectors.characterDetailViewModel
  );

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit() {
    const characterId = Number(this.route.snapshot.paramMap.get('characterId'));
    this.store.dispatch(CharactersActions.getCharacterDetail({ characterId }));
  }

  goBackToCharactersList() {
    this.router.navigate(['/characters-list'])
  }
}
