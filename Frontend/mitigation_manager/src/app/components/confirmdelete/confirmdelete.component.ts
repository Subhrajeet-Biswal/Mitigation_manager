import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-confirmdelete',
  templateUrl: './confirmdelete.component.html',
  styleUrls: ['./confirmdelete.component.css'],
  imports: [MatDialogModule, MatButtonModule],
  standalone: true,
})
export class ConfirmdeleteComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmdeleteComponent>) {}
  confirm() {
    this.dialogRef.close(true);
  }
  cancel() {
    // Cancel the confirmation action
    this.dialogRef.close(false);
  }
}
