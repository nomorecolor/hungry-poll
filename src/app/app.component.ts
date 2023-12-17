import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { NavbarComponent } from './core/navbar/navbar.component';
import { UserActions } from './core/user/user.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'hungry-poll';

  constructor(private store: Store) {
    this.store.dispatch(UserActions.loadUser());
  }
}
