import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsFunctions } from '@workspace/shared/util/utils-functions';

import { CharactersResponse } from '../../models/characters-response.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getAllCharacters(page = 1) {
    const params = UtilsFunctions.buildQueryParams({ page });
    return this.http.get<CharactersResponse>(
      'https://rickandmortyapi.com/api/character',
      { params }
    );
  }
}
