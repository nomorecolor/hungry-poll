import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

export const authGuard: CanActivateFn = () => {
  return inject(OAuthService).hasValidAccessToken()
    ? true
    : inject(Router).createUrlTree(['/']);
};
