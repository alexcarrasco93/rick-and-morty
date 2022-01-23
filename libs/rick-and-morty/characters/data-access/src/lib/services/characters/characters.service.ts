import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsFunctions } from '@workspace/shared/util/utils-functions';
import { Character, CharactersFilters } from '@workspace/rick-and-morty/characters/ui-models';

import { CharactersResponse } from '../../models/characters-response.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getAllCharacters(page = 1, filters?: CharactersFilters) {
    const params = UtilsFunctions.buildQueryParams({ page, ...filters });
    return this.http.get<CharactersResponse>(
      'https://rickandmortyapi.com/api/character',
      { params }
    );
  }

  getCharacterDetail(characterId: number) {
    return this.http.get<Character>(
      `https://rickandmortyapi.com/api/character/${characterId}`,
    );
  }
}
