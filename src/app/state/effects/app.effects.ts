import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AppEffects {

    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType('[Movies Page] Load App'),
        tap(() => console.log('effect')),

    ), { dispatch: false });

    constructor(
        private actions$: Actions,
    ) { }
}