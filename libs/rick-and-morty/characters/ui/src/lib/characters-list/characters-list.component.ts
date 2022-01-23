import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Character,
  CharactersFilters,
} from '@workspace/rick-and-morty/characters/ui-models';

@Component({
  selector: 'workspace-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  @Input()
  characters: Character[] = [];

  @Output()
  next = new EventEmitter<unknown>();

  @Output()
  prev = new EventEmitter<unknown>();

  @Output()
  filter = new EventEmitter<CharactersFilters>();

  nextPage() {
    this.next.emit();
  }

  previousPage() {
    this.prev.emit();
  }

  filterCharactersByName(name: string) {
    this.filter.emit({ name });
  }
}
