import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
      selector: 'app-user-page',
      templateUrl: './user-page.component.html',
      styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {
      private userSub: Subscription;
      user = {
            username: "",
            email: ""
      };

      constructor(private authService: AuthService) { }

      ngOnInit() {
            this.userSub = this.authService.user.subscribe(user => {
                  if (user) {
                        this.user.username = user.username;
                        this.user.email = user.email;
                  }
            });
      }

      ngOnDestroy() {
            this.userSub.unsubscribe();
      }

}
