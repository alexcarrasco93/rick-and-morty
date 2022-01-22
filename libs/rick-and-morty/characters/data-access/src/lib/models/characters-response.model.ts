import { Character } from '@workspace/rick-and-morty/characters/ui-models';

export interface CharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Character[];
}
