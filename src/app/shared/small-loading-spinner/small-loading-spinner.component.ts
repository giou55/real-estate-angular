import { Component } from '@angular/core';

@Component({
      selector: 'app-small-loading-spinner',
      template:
            '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
      styleUrls: ['./small-loading-spinner.component.css']
})
export class SmallLoadingSpinnerComponent { }