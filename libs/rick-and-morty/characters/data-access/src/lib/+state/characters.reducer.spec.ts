import { Action } from '@ngrx/store';

import * as CharactersActions from './characters.actions';
import { CharactersEntity } from './characters.models';
import { State, initialState, reducer } from './characters.reducer';

describe('Characters Reducer', () => {
  const createCharactersEntity = (id: string, name = ''): CharactersEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Characters actions', () => {
    it('loadCharactersSuccess should return the list of known Characters', () => {
      const characters = [
        createCharactersEntity('PRODUCT-AAA'),
        createCharactersEntity('PRODUCT-zzz'),
      ];
      const action = CharactersActions.loadCharactersSuccess({ characters });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
