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

export const getTotalPage = createSelector(
  getCharactersState,
  (state: State) => state.totalPages
);

export const getFilters = createSelector(
  getCharactersState,
  (state: State) => state.filters
);

export const charactersViewModel = createSelector(
  getAllCharacters,
  getFilters,
  (characters, filters) => ({
    characters,
    filters
  })
);

export const getCharacterDetail = createSelector(
  getCharactersState,
  (state: State) => state.character
);

export const characterDetailViewModel = createSelector(
  getCharacterDetail,
  getFilters,
  (character, filters) => ({
    character,
    filters
  })
);
