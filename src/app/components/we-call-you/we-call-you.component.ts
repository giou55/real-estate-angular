import { Component } from '@angular/core';

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
}
