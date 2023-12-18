import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/authentication/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.authService.initialize().then((valid) => {
      if (valid) {
        this.router.navigate(['/home']);
      }
    });
  }

  login() {
    this.authService.login();
  }
}
