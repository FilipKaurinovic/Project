import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'protected', loadComponent: () => import('./pages/protected/protected.component').then(m => m.ProtectedComponent) }
];