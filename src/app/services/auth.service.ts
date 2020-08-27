import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
      isLoginMode = false;

      statusUpdated = new EventEmitter<boolean>();

      login() {
            this.isLoginMode = true;
            console.log(this.isLoginMode);
      }

      signup() {
            this.isLoginMode = true;
      }

      logout() {
            this.isLoginMode = false;
      }
}