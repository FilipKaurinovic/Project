import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <header style="display: flex; justify-content: flex-end; padding: 1rem; background: #f2f2f2;">
      <button (click)="logout()" style="padding: 0.5rem 1rem; font-size: 1rem;">Logout</button>
    </header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {}
  logout() {
    this.authService.logout().then(() => this.router.navigate(['/']));
  }
  
}
