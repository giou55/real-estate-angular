import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
      selector: 'app-topbar',
      templateUrl: './topbar.component.html',
      styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit, OnDestroy {
      isAuthenticated = false;
      private userSub: Subscription;
      user = {
            username: "",
            email: ""
      };

      constructor(
            private authService: AuthService,
            private router: Router
      ) { }

      ngOnInit() {
            this.userSub = this.authService.user.subscribe(user => {
                  this.isAuthenticated = !!user;
                  if (user) {
                        this.user.username = user.username;
                        this.user.email = user.email;
                  }
            });
      }

      onLogout() {
            this.authService.logout();
      }

      ngOnDestroy() {
            this.userSub.unsubscribe();
      }

      goToLogin(): void {
            this.router.navigate(['login']);
      }

      goToSignup(): void {
            this.router.navigate(['signup']);
      }

}

