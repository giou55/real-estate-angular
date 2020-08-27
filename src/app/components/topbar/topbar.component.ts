import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

// import { MatDialog } from '@angular/material/dialog';
// import { DialogFormComponent } from '../dialog-form/dialog-form.component';

@Component({
      selector: 'app-topbar',
      templateUrl: './topbar.component.html',
      styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

      constructor(
            // public dialog: MatDialog,
            private authService: AuthService,
            private router: Router
      ) {
            this.authService.statusUpdated.subscribe(
                  (status: boolean) => this.isLoginMode = status
            );
      }

      isLoginMode = false;

      // openDialog(): void {
      //       const dialogRef = this.dialog.open(DialogFormComponent, {
      //             hasBackdrop: true,
      //             backdropClass: 'backdropBackground'
      //       });
      // }

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

