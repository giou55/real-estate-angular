import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-tour-this-home',
    templateUrl: './tour-this-home.component.html',
    styleUrls: ['./tour-this-home.component.scss'],
})
export class TourThisHomeComponent {
    checked = false;
    disabled = false;
    buttonSub: Subscription;
    isSubmitted: boolean = false;
    error: string = null;

    @ViewChild('contactForm') contactform: NgForm;
    @ViewChild('contactBtn', { static: true }) button: ElementRef;
    @Input() isAuthenticated: boolean;

    constructor(private authService: AuthService, private router: Router) {}

    onContactAgent() {
        this.buttonSub = of('Sending...').subscribe((res) => {
            console.log(this.button);
            this.button.nativeElement.textContent = res;
            setTimeout(() => {
                this.isSubmitted = true;
                this.button.nativeElement.textContent = 'Submit';
            }, 2000);
        });
        this.contactform.reset();
    }

    onRegister(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const username = form.value.username;
        const email = form.value.email;
        const password = form.value.password;
        let authObs: Observable<any>;

        authObs = this.authService.signup(username, email, password);

        authObs.subscribe(
            (resData) => {
                this.router.navigate(['/']);
            },
            (errorMessage) => {
                this.error = errorMessage;
            }
        );

        form.reset();
    }
}
