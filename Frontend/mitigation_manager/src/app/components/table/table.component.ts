import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
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
  standalone: true,
})
export class TableComponent {
  constructor(private api: ApiService) {}
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
      this.dataSource = res;
      for (let i = 0; i < res.length; i++) {
        this.isChecked.push(false);
      }
      console.log(this.isChecked);
    });
  }
  onPreMitigationScoreChange(id: any, event: any) {
    console.log('premitigationchangecalled', id, event.value);
  }
  onPostMitigationScoreChange(id: any, event: any) {
    console.log('postmitigationchangecalled', id, event.value);
  }
}
