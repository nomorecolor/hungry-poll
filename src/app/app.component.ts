import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from './core/authentication/auth.service';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { UserActions } from './core/user/user.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'hungry-poll';

  constructor(
    private store: Store,
    private authService: AuthService,
  ) {
    this.authService.initialize().then((valid) => {
      if (valid) {
        this.store.dispatch(UserActions.loadUser());
      }
    });
  }

  get isAuthenticated() {
    return this.authService.hasValidAccessToken();
  }
}
