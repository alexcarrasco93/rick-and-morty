import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CHARACTERS_FEATURE_KEY,
  State,
  charactersAdapter,
} from './characters.reducer';

// Lookup the 'Characters' feature state managed by NgRx
export const getCharactersState = createFeatureSelector<State>(
  CHARACTERS_FEATURE_KEY
);

const { selectAll, selectEntities } = charactersAdapter.getSelectors();

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
  (state: State) => selectAll(state)
);

export const getCharactersEntities = createSelector(
  getCharactersState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getCharactersState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getCharactersEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);

export const charactersViewModel = createSelector(
  getAllCharacters,
  (characters) => ({
    characters,
  })
);
