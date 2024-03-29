import { Component, Output } from '@angular/core';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CommonModule } from '@angular/common';
import { AverageScoreService } from 'src/app/services/average-score.service';
import { TabledataService } from 'src/app/services/tabledata.service';
@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css'],
  imports: [
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
  ],
  standalone: true,
})
export class CreateformComponent {
  numbers: number[] = [1, 2, 3, 4, 5];
  constructor(
    private api: ApiService,
    private avg: AverageScoreService,
    private tableData: TabledataService,
    private dialogue: MatDialog,
    public dialogRef: MatDialogRef<CreateformComponent>
  ) {}
  addMitigation(data: any) {
    console.log('addmitigation called');
    let validDescription = /[a-zA-Z]/.test(data.Description);
    console.log(validDescription);
    if (!validDescription) {
      alert('Enter a valid Description');
      return;
    }
    this.api.postMitigationData(data).subscribe((res: any) => {
      console.log(res);
      this.tableData.updateTableData(res.tabledata);
      this.avg.updatePreMitigaitonScore(res.preMitigationAvg);
      this.avg.updatePostMitigaitonScore(res.postMitigationAvg);
      this.dialogRef.close(true);
    });
  }
  closeDialogue() {
    this.dialogRef.close(false);
  }
}
