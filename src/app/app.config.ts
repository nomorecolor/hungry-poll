import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideOAuthClient } from 'angular-oauth2-oidc';

import { routes } from './app.routes';
import { tokenInterceptor } from './core/interceptors/token.interceptor';
import { UserEffects } from './core/user/user.effects';
import { userReducer } from './core/user/user.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ user: userReducer }),
    provideEffects(UserEffects),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    provideOAuthClient(),
  ],
};
