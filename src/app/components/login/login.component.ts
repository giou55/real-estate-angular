import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

      login(status: boolean): void {
            this.authService.statusUpdated.emit(status);
            this.router.navigate(['/']);
      }

}
