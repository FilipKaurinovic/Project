import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="text-align: center; padding: 2rem;">
      <h1>Login Page</h1>
      <button (click)="login()">Login mit Google</button>
    </div>
  `
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.loginWithGoogle()
      .then(() => this.router.navigate(['/protected']))
      .catch(err => console.error('Login error:', err));
  }
}