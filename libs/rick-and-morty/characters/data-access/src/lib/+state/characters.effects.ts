import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

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
    private charactersService: CharactersService
  ) {}
}
