import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { Character, CharactersFilters } from '@workspace/rick-and-morty/characters/ui-models';

import * as CharactersActions from './characters.actions';

export const CHARACTERS_FEATURE_KEY = 'characters';

export interface State {
  loaded: boolean; // has the Characters list been loaded
  error?: string | null; // last known error (if any)
  characters: Character[];
  totalPages: number;
  page: number;
  character?: Character;
  filters?: CharactersFilters;
}

export interface CharactersPartialState {
  readonly [CHARACTERS_FEATURE_KEY]: State;
}

export const charactersAdapter: EntityAdapter<Character> =
  createEntityAdapter<Character>();

export const initialState: State = {
  // set initial required properties
  loaded: false,
  characters: [],
  page: 1,
  totalPages: 1,
};

const charactersReducer = createReducer(
  initialState,
  on(CharactersActions.eneterCharactersPage, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CharactersActions.loadNextCharacters, (state) => ({
    ...state,
    loaded: false,
  })),
  on(CharactersActions.loadPrevCharacters, (state) => ({
    ...state,
    loaded: false,
  })),
  on(
    CharactersActions.loadCharactersSuccess,
    (state, { characters, page, totalPages, filters }) => ({
      ...state,
      characters,
      loaded: true,
      page,
      totalPages,
      filters: filters ?? state.filters
    })
  ),
  on(CharactersActions.loadCharactersFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(CharactersActions.getCharacterDetail, (state) => ({
    ...state,
    loaded: false,
  })),
  on(CharactersActions.getCharacterDetailSuccess, (state, { character }) => ({
    ...state,
    loaded: true,
    character,
  })),
  on(CharactersActions.getCharacterDetailFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return charactersReducer(state, action);
}
