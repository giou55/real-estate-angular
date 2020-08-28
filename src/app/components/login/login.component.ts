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

      constructor(
            private authService: AuthService,
            private router: Router
      ) { }

      ngOnInit(): void {
      }

      isLoading = false;
      //authObs: Observable<AuthResponseData>;

      // login(status: boolean): void {
      //       this.authService.statusUpdated.emit(status);
      //       this.router.navigate(['/']);
      // }

      onSubmit(form: NgForm) {
            if (!form.valid) {
                  return;
            }
            const name = form.value.name;
            const password = form.value.password;

            this.isLoading = true;

            //this.authObs = this.authService.login(name, password);

            form.reset();
      }

}
