import { createAction, props } from '@ngrx/store';
import { Character } from '@workspace/rick-and-morty/characters/ui-models';

export const eneterCharactersPage = createAction('[Characters Page] Init');

export const loadNextCharacters = createAction(
  '[Characters/API] Load Next Characters'
);

export const loadPrevCharacters = createAction(
  '[Characters/API] Load Previous Characters'
);

export const loadCharactersSuccess = createAction(
  '[Characters/API] Load Characters Success',
  props<{ characters: Character[], totalPages: number }>()
);

export const loadCharactersFailure = createAction(
  '[Characters/API] Load Characters Failure',
  props<{ error: any }>()
);
