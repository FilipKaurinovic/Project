import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, User } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private auth: Auth) {}

  loginWithGoogle(): Promise<User> {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    return signInWithPopup(this.auth, provider).then(res => res.user);
  }

  logout(): Promise<void> {
    return signOut(this.auth);
  }

  getUser() {
    return this.auth.currentUser;
  }
}
