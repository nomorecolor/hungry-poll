import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { UserActions } from './user.actions';
import { UserService } from './user.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) {}

  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUser),
      exhaustMap(() =>
        this.userService.getUser().pipe(
          map((user) => UserActions.loadUserSuccess({ user })),
          catchError(() => of(UserActions.loadUserFailure())),
        ),
      ),
    );
  });
}
