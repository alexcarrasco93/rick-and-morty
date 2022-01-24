import { createAction, props } from '@ngrx/store';
import {
  Character,
  CharactersFilters,
} from '@workspace/rick-and-morty/characters/ui-models';

export const eneterCharactersPage = createAction('[Characters Page] Init');

export const loadNextCharacters = createAction(
  '[Characters/API] Load Next Characters'
);

export const loadPrevCharacters = createAction(
  '[Characters/API] Load Previous Characters'
);

export const filterCharacters = createAction(
  '[Characters/API] Filter Characters',
  props<{ filters: CharactersFilters }>()
);

export const loadCharactersSuccess = createAction(
  '[Characters/API] Load Characters Success',
  props<{ characters: Character[]; page: number; totalPages: number }>()
);

export const loadCharactersFailure = createAction(
  '[Characters/API] Load Characters Failure',
  props<{ error: any }>()
);

export const getCharacterDetail = createAction(
  '[Characters/API] Get Character Detail',
  props<{ characterId: number }>()
);

export const getCharacterDetailSuccess = createAction(
  '[Characters/API] Get Character Detail Success',
  props<{ character: Character }>()
);

export const getCharacterDetailFailure = createAction(
  '[Characters/API] Get Character Detail Failure',
  props<{ error: any }>()
);
