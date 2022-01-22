import { CharactersEntity } from './characters.models';
import {
  charactersAdapter,
  CharactersPartialState,
  initialState,
} from './characters.reducer';
import * as CharactersSelectors from './characters.selectors';

describe('Characters Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCharactersId = (it: CharactersEntity) => it.id;
  const createCharactersEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CharactersEntity);

  let state: CharactersPartialState;

  beforeEach(() => {
    state = {
      characters: charactersAdapter.setAll(
        [
          createCharactersEntity('PRODUCT-AAA'),
          createCharactersEntity('PRODUCT-BBB'),
          createCharactersEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Characters Selectors', () => {
    it('getAllCharacters() should return the list of Characters', () => {
      const results = CharactersSelectors.getAllCharacters(state);
      const selId = getCharactersId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = CharactersSelectors.getSelected(state) as CharactersEntity;
      const selId = getCharactersId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getCharactersLoaded() should return the current "loaded" status', () => {
      const result = CharactersSelectors.getCharactersLoaded(state);

      expect(result).toBe(true);
    });

    it('getCharactersError() should return the current "error" state', () => {
      const result = CharactersSelectors.getCharactersError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
