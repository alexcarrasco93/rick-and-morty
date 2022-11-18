import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
      concatLatestFrom(() => this.store.select(CharactersSelectors.getPage)),
      exhaustMap(([, page]) => {
        const currentPage = Number(this.route.snapshot.queryParams['page']);
        return this.charactersService
          .getAllCharacters(currentPage || page)
          .pipe(
            map((response) => {
              this.router.navigate([], {
                relativeTo: this.route,
                queryParams: {
                  page: currentPage || page,
                },
              });
              return CharactersActions.loadCharactersSuccess({
                characters: response.results,
                page: currentPage || page,
                totalPages: response.info.pages,
              });
            }),
            catchError((error) =>
              of(CharactersActions.loadCharactersFailure({ error }))
            )
          );
      })
    )
  );

  loadNextCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharactersActions.loadNextCharacters),
      concatLatestFrom(() =>
        this.store.select(CharactersSelectors.getTotalPage)
      ),
      exhaustMap(([, totalPages]) => {
        const currentPage = Number(this.route.snapshot.queryParams['page']);
        const page = currentPage < totalPages ? currentPage + 1 : currentPage;
        return this.charactersService.getAllCharacters(page).pipe(
          map((response) => {
            this.router.navigate([], {
              relativeTo: this.route,
              queryParams: { page },
            });
            return CharactersActions.loadCharactersSuccess({
              characters: response.results,
              page,
              totalPages: response.info.pages,
            });
          }),
          catchError((error) =>
            of(CharactersActions.loadCharactersFailure({ error }))
          )
        );
      })
    )
  );

  loadPrevCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharactersActions.loadPrevCharacters),
      exhaustMap(() => {
        const currentPage = Number(this.route.snapshot.queryParams['page']);
        const page = currentPage > 1 ? currentPage - 1 : currentPage;
        return this.charactersService.getAllCharacters(page).pipe(
          map((response) => {
            this.router.navigate([], {
              relativeTo: this.route,
              queryParams: {
                page,
              },
            });
            return CharactersActions.loadCharactersSuccess({
              characters: response.results,
              page,
              totalPages: response.info.pages,
            });
          }),
          catchError((error) =>
            of(CharactersActions.loadCharactersFailure({ error }))
          )
        );
      })
    )
  );

  filterCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharactersActions.filterCharacters),
      concatLatestFrom(() => this.store.select(CharactersSelectors.getPage)),
      exhaustMap(([{ filters }, page]) =>
        this.charactersService.getAllCharacters(1, filters).pipe(
          map((response) => {
            this.router.navigate([], {
              relativeTo: this.route,
              queryParams: {
                page,
              },
            });
            return CharactersActions.loadCharactersSuccess({
              characters: response.results,
              page: 1,
              totalPages: response.info.pages,
              filters
            });
          }),
          catchError((error) =>
            of(CharactersActions.loadCharactersFailure({ error }))
          )
        )
      )
    )
  );

  getCharacterDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharactersActions.getCharacterDetail),
      exhaustMap(({ characterId }) =>
        this.charactersService.getCharacterDetail(characterId).pipe(
          map((character) =>
            CharactersActions.getCharacterDetailSuccess({ character })
          ),
          catchError((error) =>
            of(CharactersActions.getCharacterDetailFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private store: Store,
    private charactersService: CharactersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
}
