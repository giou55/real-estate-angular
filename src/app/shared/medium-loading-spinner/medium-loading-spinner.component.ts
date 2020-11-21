import { Component } from '@angular/core';

@Component({
    selector: 'app-medium-loading-spinner',
    template:
        '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
    styleUrls: ['./medium-loading-spinner.component.css'],
})
export class MediumLoadingSpinnerComponent {}
