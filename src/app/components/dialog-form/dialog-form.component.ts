import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import { AuthService } from '../../services/auth.service';

@Component({
      selector: 'app-dialog-form',
      templateUrl: './dialog-form.component.html',
      styleUrls: ['./dialog-form.component.scss']
})
export class DialogFormComponent implements OnInit {

      constructor(
            public dialogRef: MatDialogRef<DialogFormComponent>,
            authService: AuthService) { }

      ngOnInit(): void {
      }

      closeDialog(): void {
            this.dialogRef.close();
      }

}
