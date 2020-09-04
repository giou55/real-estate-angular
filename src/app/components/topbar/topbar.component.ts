import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
      selector: 'app-topbar',
      templateUrl: './topbar.component.html',
      styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

      constructor(
            private authService: AuthService,
            private router: Router
      ) {
            this.authService.statusUpdated.subscribe(
                  (status: boolean) => this.isLoginMode = status
            );
      }

      isLoginMode = false;

      logout(): void {
            this.isLoginMode = false;
            this.router.navigate(['/']);
      }

      goToLoginPage(): void {
            this.router.navigate(['login']);
      }

      goToSignupPage(): void {
            this.router.navigate(['signup']);
      }

}

