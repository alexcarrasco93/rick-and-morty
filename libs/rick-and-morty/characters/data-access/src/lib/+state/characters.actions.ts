import { createAction, props } from '@ngrx/store';
import { Character } from '@workspace/rick-and-morty/characters/ui-models';

export const eneterCharactersPage = createAction('[Characters Page] Init');

export const loadCharactersSuccess = createAction(
  '[Characters/API] Load Characters Success',
  props<{ characters: Character[] }>()
);

export const loadCharactersFailure = createAction(
  '[Characters/API] Load Characters Failure',
  props<{ error: any }>()
);
