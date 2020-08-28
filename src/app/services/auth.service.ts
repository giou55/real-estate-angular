import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// export interface AuthResponseData {
//       kind: string;
//       idToken: string;
//       email: string;
//       refreshToken: string;
//       expiresIn: string;
//       localId: string;
//       registered?: boolean;
// }

@Injectable({ providedIn: 'root' })
export class AuthService {
      constructor(private http: HttpClient) { }

      isLoginMode = false;

      statusUpdated = new EventEmitter<boolean>();

      login(username: string, password: string) {
            // this.isLoginMode = true;
            // console.log(this.isLoginMode);
            return this.http.post(
                  "http://localhost:1337/auth/local",
                  {
                        "identifier": username,
                        "password": password
                  }
            );
      }

      signup(username: string, password: string, email: string) {
            //this.isLoginMode = true;
            return this.http.post(
                  "http://localhost:1337/auth/local/register",
                  {
                        "username": username,
                        "password": password,
                        "email": email
                  }
            );
      }

      logout() {
            this.isLoginMode = false;
      }
}