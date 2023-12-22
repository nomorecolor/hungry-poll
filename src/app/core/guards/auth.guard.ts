import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../authentication/auth.service';

export const authGuard: CanActivateFn = () => {
  return inject(AuthService).hasValidAccessToken()
    ? true
    : inject(Router).createUrlTree(['/']);
};
