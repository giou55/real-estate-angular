import {
    Component,
    ViewChild,
    ElementRef,
    Input,
    OnInit,
    OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-agent-contact-form',
    templateUrl: './agent-contact-form.component.html',
    styleUrls: ['./agent-contact-form.component.scss'],
})
export class AgentContactFormComponent implements OnInit, OnDestroy {
    checked = false;
    disabled = false;
    buttonSub: Subscription;
    isSubmitted: boolean = false;
    error: string = null;
    private userSub: Subscription;
    user = {
        email: '',
    };

    @ViewChild('contactForm') contactform: NgForm;
    @ViewChild('contactBtn', { static: false }) btn: ElementRef;
    @Input() isAuthenticated: boolean;
    @Input() header: string;
    @Input() name: string;
    @Input() agent_id: string;
    @Input() image_url: string;
    @Input() paragraph: string;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.userSub = this.authService.user.subscribe((user) => {
            this.isAuthenticated = !!user;
            if (user) {
                this.user.email = user.email;
            }
        });
    }

    onContactAgent() {
        this.buttonSub = of('Sending...').subscribe((res) => {
            this.btn.nativeElement.textContent = res;
            setTimeout(() => {
                this.isSubmitted = true;
                this.btn.nativeElement.textContent = 'Contact Agent';
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

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}
