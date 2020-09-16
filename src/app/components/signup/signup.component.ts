import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
      selector: 'app-signup',
      templateUrl: './signup.component.html',
      styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
      isLoading = false;
      error: string = null;

      constructor(
            private authService: AuthService,
            private router: Router
      ) { }

      onSubmit(form: NgForm) {
            if (!form.valid) {
                  return;
            }
            const username = form.value.username;
            const email = form.value.email;
            const password = form.value.password;
            let authObs: Observable<any>;
            this.isLoading = true;

            authObs = this.authService.signup(username, email, password);

            authObs.subscribe(
                  resData => {
                        this.isLoading = false;
                        this.router.navigate(['/']);
                  },
                  errorMessage => {
                        this.error = errorMessage;
                        this.isLoading = false;
                  }
            );

            // this.authService.signup(name, password, email).subscribe(
            //       resData => {
            //             console.log(resData);
            //             this.authService.statusUpdated.emit(true);
            //             this.router.navigate(['/']);
            //       },
            //       error => {
            //             console.log(error);
            //             this.error = "The user already exists or an unknown error occurred.";
            //             this.isLoading = false;
            //       }
            // );

            form.reset();
      }

}
