import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
      isLoginMode = false;

      login() {
            this.isLoginMode = true;
      }

      signup() {

      }

      logout() {
            this.isLoginMode = false;
      }
}