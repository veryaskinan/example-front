import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  accessToken: string;
  refreshToken: string;

  constructor(private router: Router) {
    this.accessToken = undefined;
    this.refreshToken =  'asdasda';
  }

  hasAccessToken() {
    return Boolean(this.accessToken);
  }

  checkAuth() {
    if (!this.hasAccessToken()) {
      this.router.navigate(['/sign-in']);
    }
  }

  signIn(credentials) {
    this.accessToken = credentials.email + credentials.password;
    this.router.navigate(['/']);
  }
}
