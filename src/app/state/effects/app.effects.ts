import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { SearchActions } from '../actions';
import { TMDBService } from '../services';
import { of, map } from 'rxjs';

/**
 * It's a relatively small app. So, no need for multiple effects files
 */

@Injectable({ providedIn: 'root' })
export class AppEffects {
  constructor(
    private actions$: Actions,
    private _service: TMDBService
  ) {}

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.search),
      switchMap(({ query }) =>
        this._service.search(query, 'film').pipe(
          map((res: any) => SearchActions.searchSuccess({ results: res })),
          catchError(() => of(SearchActions.searchFailure()))
        )
      )
    )
  );
}
