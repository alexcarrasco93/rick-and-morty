import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CHARACTERS_FEATURE_KEY, State } from './characters.reducer';

// Lookup the 'Characters' feature state managed by NgRx
export const getCharactersState = createFeatureSelector<State>(
  CHARACTERS_FEATURE_KEY
);

export const getCharactersLoaded = createSelector(
  getCharactersState,
  (state: State) => state.loaded
);

export const getCharactersError = createSelector(
  getCharactersState,
  (state: State) => state.error
);

export const getAllCharacters = createSelector(
  getCharactersState,
  (state: State) => state.characters
);

export const getPage = createSelector(
  getCharactersState,
  (state: State) => state.page
);

export const charactersViewModel = createSelector(
  getAllCharacters,
  (characters) => ({
    characters,
  })
);

export const getCharacterDetail = createSelector(
  getCharactersState,
  (state: State) => state.character
);

export const characterDetailViewModel = createSelector(
  getCharacterDetail,
  (character) => ({
    character,
  })
);
