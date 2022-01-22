import { Component, Input, OnInit } from '@angular/core';
import { Character } from '@workspace/rick-and-morty/characters/ui-models';

@Component({
  selector: 'workspace-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  @Input()
  characters: Character[] = [];

  ngOnInit(): void {
    console.log(this.characters);
  }
}
