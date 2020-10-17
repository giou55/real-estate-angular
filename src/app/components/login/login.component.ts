import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    isLoading = false;
    error: string = null;

    constructor(private authService: AuthService, private router: Router) {}

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const username = form.value.username;
        const password = form.value.password;
        let authObs: Observable<any>;
        this.isLoading = true;

        authObs = this.authService.login(username, password);

        authObs.subscribe(
            (resData) => {
                this.isLoading = false;
                this.router.navigate(['/']);
            },
            (errorMessage) => {
                this.error = errorMessage;
                this.isLoading = false;
            }
        );

        form.reset();
    }
}
