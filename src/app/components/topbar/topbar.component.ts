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

      constructor(
            private authService: AuthService,
            private router: Router
      ) { }

      ngOnInit() {
            this.userSub = this.authService.user.subscribe(user => {
                  this.isAuthenticated = !!user;
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

