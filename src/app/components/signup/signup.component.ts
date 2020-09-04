import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
      selector: 'app-signup',
      templateUrl: './signup.component.html',
      styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

      isLoading = false;
      error: string = null;

      constructor(
            private authService: AuthService,
            private router: Router
      ) { }

      ngOnInit(): void {
      }

      onSubmit(form: NgForm) {
            if (!form.valid) {
                  return;
            }
            const name = form.value.name;
            const email = form.value.email;
            const password = form.value.password;
            this.isLoading = true;

            this.authService.signup(name, password, email).subscribe(
                  resData => {
                        console.log(resData);
                        this.authService.statusUpdated.emit(true);
                        this.router.navigate(['/']);
                  },
                  error => {
                        console.log(error);
                        this.error = "The user already exists or an unknown error occurred.";
                        this.isLoading = false;
                  }
            );

            form.reset();
      }

}
