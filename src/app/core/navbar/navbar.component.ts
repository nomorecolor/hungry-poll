import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectUser } from '../user/user.selectors';

@Component({
  selector: 'core-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isMenuOpened = false;

  user$ = this.store.select(selectUser);

  constructor(private store: Store) {}

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
