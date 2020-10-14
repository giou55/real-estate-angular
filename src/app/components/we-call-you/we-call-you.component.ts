import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { of, Subscription } from 'rxjs';

@Component({
    selector: 'app-we-call-you',
    templateUrl: './we-call-you.component.html',
    styleUrls: ['./we-call-you.component.scss'],
})
export class WeCallYouComponent {
    checked = false;
    indeterminate = false;
    labelPosition: 'before' | 'after' = 'after';
    disabled = false;
    buttonSub: Subscription;
    isSubmitted: boolean = false;
    @ViewChild('f') form: NgForm;
    @ViewChild('btn', { static: true }) button: ElementRef;

    onSubmit() {
        this.buttonSub = of('Sending...').subscribe((res) => {
            this.button.nativeElement.textContent = res;
            setTimeout(() => {
                this.isSubmitted = true;
                this.button.nativeElement.textContent = 'Submit';
            }, 2000);
        });
        this.form.reset();
    }
}
