import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogFormComponent } from '../dialog-form/dialog-form.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      width: '400px',
      height: '450px',
      hasBackdrop: true,
      backdropClass: 'backdropBackground'
    });
  }

}
