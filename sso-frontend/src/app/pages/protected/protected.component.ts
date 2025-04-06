import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-protected',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="text-align: center; padding: 2rem;">
      <h1>Protected Page</h1>
      <p>Willkommen, du bist eingeloggt!</p>
    </div>
  `
})
export class ProtectedComponent {}