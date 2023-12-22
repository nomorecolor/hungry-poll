import { Injectable } from '@angular/core';
import { AuthConfig, OAuthErrorEvent, OAuthService } from 'angular-oauth2-oidc';

import { environment } from '../../../environments/environment';

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
    useSilentRefresh: true,
  };

  constructor(private oAuthService: OAuthService) {
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
    this.oAuthService.setupAutomaticSilentRefresh();

    return this.oAuthService
      .loadDiscoveryDocumentAndTryLogin()
      .then(() => this.oAuthService.hasValidAccessToken());
  }

  login() {
    this.oAuthService.initCodeFlow();
  }

  logout() {
    this.oAuthService.logOut();
  }

  hasValidAccessToken() {
    return this.oAuthService.hasValidAccessToken();
  }

  getIdToken() {
    return this.oAuthService.getIdToken();
  }
}
