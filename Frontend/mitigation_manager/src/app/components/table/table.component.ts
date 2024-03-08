import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { AverageScoreService } from 'src/app/services/average-score.service';
import { TabledataService } from 'src/app/services/tabledata.service';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ButtonenableService } from 'src/app/services/buttonenable.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    MatCheckboxModule,
    FormsModule,
  ],
  providers: [ToolbarComponent],
  standalone: true,
})
export class TableComponent {
  constructor(
    private api: ApiService,
    private avg: AverageScoreService,
    private tableData: TabledataService,
    private enable: ButtonenableService
  ) {}
  public displayedColumns: string[] = [
    'select',
    'rowNumber',
    'Description',
    'Pre_Mitigation_score',
    'Post_Mitigation_score',
    'Applied_on',
  ];
  public dataSource: any = [];
  numbers: number[] = [1, 2, 3, 4, 5];
  public isChecked: boolean[] = [];
  ngOnInit(): void {
    this.api.getAllUser().subscribe((res: any) => {
      console.table(res);
      this.tableData.updateTableData(res.tabledata);
      this.tableData.currentdata.subscribe((data) => (this.dataSource = data));
      this.tableData.currentchecklist.subscribe((checklist) => {
        this.isChecked = checklist;
      });
      this.avg.updatePreMitigaitonScore(res.preMitigationAvg);
      this.avg.updatePostMitigaitonScore(res.postMitigationAvg);
      for (let i = 0; i < res.tabledata.length; i++) {
        this.isChecked.push(false);
      }
    });
  }
  onPreMitigationScoreChange(id: any, event: any, index: any) {
    this.api
      .updatePreMitigationScore(id, { Pre_Mitigation_score: event.value })
      .subscribe((res: any) => {
        console.log(res);
        this.avg.updatePreMitigaitonScore(res.preMitigationAvg);
      });
    let currentDate = new Date();
    let formattedDate = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
    this.dataSource[index].Applied_on = formattedDate;
  }
  onPostMitigationScoreChange(id: any, event: any, index: any) {
    this.api
      .updatePostMitigationScore(id, { Post_Mitigation_score: event.value })
      .subscribe((res: any) => {
        console.log(res);
        this.avg.updatePostMitigaitonScore(res.postMitigationAvg);
      });
    let currentDate = new Date();
    let formattedDate = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
    this.dataSource[index].Applied_on = formattedDate;
  }
  onSelectionChange() {
    let flag: boolean = false;
    for (let i = 0; i < this.isChecked.length; i++) {
      flag = flag || this.isChecked[i];
    }
    this.enable.updateEnableCreate(!flag);
    this.enable.updateEnableDelete(flag);
  }
}
