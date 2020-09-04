import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
      selector: 'app-login',
      templateUrl: './login.component.html',
      styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
            const password = form.value.password;
            this.isLoading = true;

            this.authService.login(name, password).subscribe(
                  resData => {
                        console.log(resData);
                        this.authService.statusUpdated.emit(true);
                        this.router.navigate(['/']);
                  },
                  error => {
                        console.log(error);
                        this.error = "There was a problem logging in. Check your username and password or create an account.";
                        this.isLoading = false;
                  }
            );

            form.reset();
      }

}
