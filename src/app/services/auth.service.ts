import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
    user = new BehaviorSubject<User>(null);

    constructor(private http: HttpClient, private router: Router) {}

    login(username: string, password: string) {
        return this.http
            .post<any>(`${environment.baseUrl}/auth/local`, {
                identifier: username,
                password: password,
            })
            .pipe(
                catchError(this.handleError),
                tap((resData) => {
                    this.handleAuthentication(
                        resData.user.username,
                        resData.user.email,
                        resData.user.id,
                        resData.jwt
                    );
                })
            );
    }

    signup(username: string, email: string, password: string) {
        return this.http
            .post<any>(`${environment.baseUrl}/auth/local/register`, {
                username: username,
                email: email,
                password: password,
            })
            .pipe(
                catchError(this.handleError),
                tap((resData) => {
                    this.handleAuthentication(
                        resData.user.username,
                        resData.user.email,
                        resData.user.id,
                        resData.jwt
                    );
                })
            );
    }

    autoLogin() {
        const userData: {
            username: string;
            email: string;
            id: number;
            _token: string;
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }

        const loadedUser = new User(
            userData.username,
            userData.email,
            userData.id,
            userData._token
        );

        if (loadedUser.token) {
            this.user.next(loadedUser);
        }
    }

    logout() {
        this.user.next(null);
        this.router.navigate(['/']);
        localStorage.removeItem('userData');
    }

    private handleAuthentication(
        username: string,
        email: string,
        userId: number,
        token: string
    ) {
        const user = new User(username, email, userId, token);
        this.user.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist.';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct.';
                break;
            default:
                errorMessage =
                    'There was a problem logging in. Check your username and password or create an account';
        }
        return throwError(errorMessage);
    }
}
