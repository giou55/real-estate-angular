import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';

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
      user = new Subject<User>();

      constructor(private http: HttpClient) { }

      isLoginMode = false;

      statusUpdated = new EventEmitter<boolean>();

      login(username: string, password: string) {
            return this.http
                  .post(
                        "http://localhost:1337/auth/local",
                        {
                              "identifier": username,
                              "password": password
                        }
                  )
                  .pipe(
                        tap(resData => {
                              console.log(resData);
                              //this.authenticate(resData.email, resData.id, resData.jwt);
                        })
                  );
      }

      signup(username: string, password: string, email: string) {
            return this.http
                  .post(
                        "http://localhost:1337/auth/local/register",
                        {
                              "username": username,
                              "password": password,
                              "email": email
                        }
                  )
                  .pipe(
                        tap(resData => {
                              //this.authenticate(resData.email, resData.id, resData.jwt);
                        })
                  );
      }

      authenticate(email: string, id: number, token: string) {
            const user = new User(email, id, token);
            this.user.next(user);
      }

      logout() {
            this.isLoginMode = false;
      }
}