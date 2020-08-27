import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
      selector: 'app-signup',
      templateUrl: './signup.component.html',
      styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

      constructor(
            private authService: AuthService,
            private router: Router
      ) { }

      ngOnInit(): void {
      }

      create(status: boolean): void {
            this.authService.statusUpdated.emit(status);
            this.router.navigate(['/']);
      }

}
