import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { Character } from '@workspace/rick-and-morty/characters/ui-models';

import * as CharactersActions from './characters.actions';

export const CHARACTERS_FEATURE_KEY = 'characters';

export interface State extends EntityState<Character> {
  selectedId?: string | number; // which Characters record has been selected
  loaded: boolean; // has the Characters list been loaded
  error?: string | null; // last known error (if any)
}

export interface CharactersPartialState {
  readonly [CHARACTERS_FEATURE_KEY]: State;
}

export const charactersAdapter: EntityAdapter<Character> =
  createEntityAdapter<Character>();

export const initialState: State = charactersAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const charactersReducer = createReducer(
  initialState,
  on(CharactersActions.eneterCharactersPage, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CharactersActions.loadCharactersSuccess, (state, { characters }) =>
    charactersAdapter.setAll(characters, { ...state, loaded: true })
  ),
  on(CharactersActions.loadCharactersFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return charactersReducer(state, action);
}
