import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  imports: [MatTableModule, MatFormFieldModule, MatSelectModule, CommonModule,MatCheckboxModule],
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

  ngOnInit(): void {
    this.api.getAllUser().subscribe((res: any) => {
      console.table(res);
      this.dataSource = res;
    });
  }
  onPreMitigationScoreChange(id:any,event:any) {
    console.log('premitigationchangecalled',id,event.value);
  }
  onPostMitigationScoreChange(id:any,event:any) {
    console.log('postmitigationchangecalled',id,event.value);
  }
}