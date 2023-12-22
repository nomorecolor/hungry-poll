import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OAuthService } from 'angular-oauth2-oidc';
import { from, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { UserActions } from './user.actions';
import { UserService } from './user.service';
import { User, UserProfile } from './user.type';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private oAuthService: OAuthService,
    private userService: UserService,
  ) {}

  loadUserProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUserProfile),
      exhaustMap(() =>
        from(this.oAuthService.loadUserProfile()).pipe(
          map((userProfile) =>
            UserActions.loadUser({ userProfile: userProfile as UserProfile }),
          ),
          catchError(() => of(UserActions.loadUserProfileFailure())),
        ),
      ),
    );
  });

  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUser),
      exhaustMap(({ userProfile }) => {
        const { sub, given_name, family_name, email, picture } =
          userProfile.info;

        const user: User = {
          id: '',
          firstName: given_name,
          lastName: family_name,
          email: email,
          externalId: sub,
          imageUrl: picture,
        };

        return this.userService.getUser(user).pipe(
          map((currentUser) => {
            console.log('currentUser', currentUser);

            return UserActions.loadUserSuccess({ user: currentUser });
          }),
          catchError(() => of(UserActions.loadUserFailure())),
        );
      }),
    );
  });
}
