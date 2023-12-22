import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { environment } from '../../../environments/environment';
import { AuthService } from '../authentication/auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const idToken = inject(AuthService).getIdToken();

  if (idToken && req.url.includes(environment.apiUrl)) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${idToken}`,
      },
    });
  }

  return next(req);
};
