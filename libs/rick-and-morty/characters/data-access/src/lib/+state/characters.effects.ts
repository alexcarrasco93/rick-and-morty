import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { CharactersSelectors } from '../..';
import { CharactersService } from '../services/characters/characters.service';
import * as CharactersActions from './characters.actions';

@Injectable()
export class CharactersEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharactersActions.eneterCharactersPage),
      exhaustMap(() =>
        this.charactersService.getAllCharacters().pipe(
          map((response) =>
            CharactersActions.loadCharactersSuccess({
              characters: response.results,
              totalPages: response.info.pages,
            })
          ),
          catchError((error) =>
            of(CharactersActions.loadCharactersFailure({ error }))
          )
        )
      )
    )
  );

  loadNextCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharactersActions.loadNextCharacters),
      concatLatestFrom(() => this.store.select(CharactersSelectors.getPage)),
      exhaustMap(([, page]) =>
        this.charactersService.getAllCharacters(page).pipe(
          map((response) =>
            CharactersActions.loadCharactersSuccess({
              characters: response.results,
              totalPages: response.info.pages,
            })
          ),
          catchError((error) =>
            of(CharactersActions.loadCharactersFailure({ error }))
          )
        )
      )
    )
  );

  loadPrevCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharactersActions.loadPrevCharacters),
      concatLatestFrom(() => this.store.select(CharactersSelectors.getPage)),
      exhaustMap(([, page]) =>
        this.charactersService.getAllCharacters(page).pipe(
          map((response) =>
            CharactersActions.loadCharactersSuccess({
              characters: response.results,
              totalPages: response.info.pages,
            })
          ),
          catchError((error) =>
            of(CharactersActions.loadCharactersFailure({ error }))
          )
        )
      )
    )
  );

  filterCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharactersActions.filterCharacters),
      concatLatestFrom(() => this.store.select(CharactersSelectors.getPage)),
      exhaustMap(([{ fiters }, page]) =>
        this.charactersService.getAllCharacters(page, fiters).pipe(
          map((response) =>
            CharactersActions.loadCharactersSuccess({
              characters: response.results,
              totalPages: response.info.pages,
            })
          ),
          catchError((error) =>
            of(CharactersActions.loadCharactersFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private store: Store,
    private charactersService: CharactersService
  ) {}
}
