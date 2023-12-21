import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OAuthService } from 'angular-oauth2-oidc';
import { from, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { UserActions } from './user.actions';
import { User, UserInfo } from './user.type';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private oAuthService: OAuthService,
  ) {}

  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUser),
      exhaustMap(() =>
        from(this.oAuthService.loadUserProfile()).pipe(
          map((userProfile) => {
            const { name, picture } = (userProfile as UserInfo).info;

            const user: User = {
              id: '8b61ca89-2b53-4cfd-a0ae-7c953d78835d',
              name: name,
              imageUrl: picture,
            };

            return UserActions.loadUserSuccess({ user });
          }),
          catchError(() => of(UserActions.loadUserFailure())),
        ),
      ),
    );
  });
}
