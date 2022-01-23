import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '@workspace/rick-and-morty/characters/ui-models';

@Component({
  selector: 'workspace-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
  @Input()
  character?: Character;

  @Output()
  action = new EventEmitter<unknown>();

  doAction() {
    this.action.emit();
  }
}
