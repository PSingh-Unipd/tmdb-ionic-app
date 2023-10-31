import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { SearchActions } from '../actions';
import { of, map, switchMap, catchError } from 'rxjs';
import { TMDBService } from '../services';

/**
 * It's a relatively small app. So, no need for multiple effects files
 */

@Injectable({ providedIn: 'root' })
export class AppEffects {
  constructor(
    private actions$: Actions,
    private service: TMDBService
  ) {}

  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.search),
      switchMap(({ query }) =>
        this.service.search(query, 'film').pipe(
          map((res: any) => SearchActions.searchSuccess({ results: res })),
          catchError(() => of(SearchActions.searchFailure()))
        )
      )
    )
  );
}
