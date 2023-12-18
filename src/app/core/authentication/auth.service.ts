import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthErrorEvent, OAuthService } from 'angular-oauth2-oidc';

import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  oAuthConfig: AuthConfig = {
    issuer: 'https://accounts.google.com',
    strictDiscoveryDocumentValidation: false,
    redirectUri: window.location.origin,
    clientId: environment.google.clientId,
    scope: 'openid profile email',
  };

  constructor(
    private oAuthService: OAuthService,
    private router: Router,
  ) {
    // Useful for debugging:
    this.oAuthService.events.subscribe((event) => {
      if (event instanceof OAuthErrorEvent) {
        console.error('OAuthErrorEvent Object:', event);
      } else {
        console.warn('OAuthEvent Object:', event);
      }
    });

    this.oAuthService.configure(this.oAuthConfig);
  }

  initialize() {
    return this.oAuthService
      .loadDiscoveryDocumentAndTryLogin()
      .then(() => this.oAuthService.hasValidAccessToken());
  }

  login() {
    this.oAuthService.initLoginFlow();
  }

  logout() {
    this.oAuthService.logOut();
  }

  hasValidAccessToken() {
    return this.oAuthService.hasValidAccessToken();
  }
}
