import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { UserEffects } from './core/user/user.effects';
import { userReducer } from './core/user/user.reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideOAuthClient } from 'angular-oauth2-oidc';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ user: userReducer }),
    provideEffects(UserEffects),
    provideHttpClient(),
    provideOAuthClient(),
  ],
};
