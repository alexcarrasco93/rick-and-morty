import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharactersResponse } from '../../models/characters-response.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getAllCharacters() {
    return this.http.get<CharactersResponse>('https://rickandmortyapi.com/api/character');
  }
}
