import {Inject, Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const LOCAL_STORAGE_ACCESS_TOKEN_KEY = 'accessToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  refreshToken: string;

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private router: Router
  ) {
  }

  checkAuth() {
    const accessToken = this.storage.get(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    if (!accessToken) {
      this.router.navigate(['/sign-in']);
    }
  }

  signIn(credentials) {
    this.storage.set(LOCAL_STORAGE_ACCESS_TOKEN_KEY, credentials.email + credentials.password);
    this.router.navigate(['/']);
  }
}
