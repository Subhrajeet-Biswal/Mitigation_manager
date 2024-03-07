import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateformComponent } from '../createform/createform.component';
import { TabledataService } from 'src/app/services/tabledata.service';
import { ConfirmdeleteComponent } from '../confirmdelete/confirmdelete.component';
import { ApiService } from 'src/app/services/api.service';
import { AverageScoreService } from 'src/app/services/average-score.service';
import { ButtonenableService } from 'src/app/services/buttonenable.service';
import { fakeAsync } from '@angular/core/testing';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule],
  standalone: true,
})
export class ToolbarComponent implements OnInit {
  public records: any = [];
  public checkList: any = [];
  public enableCreate: boolean = true;
  public enableDelete: boolean = false;
  constructor(
    private dialogue: MatDialog,
    private tableData: TabledataService,
    private api: ApiService,
    private avg: AverageScoreService,
    private enable: ButtonenableService
  ) {}
  ngOnInit(): void {
    this.tableData.currentdata.subscribe((data) => (this.records = data));
    this.tableData.currentchecklist.subscribe((checklist) => {
      this.checkList = checklist;
    });
    this.enable.currentEnableCreate.subscribe((isenable) => {
      this.enableCreate = isenable;
    });
    this.enable.currentEnableDelete.subscribe((isenable) => {
      this.enableDelete = isenable;
    });
  }

  openCreateForm() {
    console.log(this.checkList);
    let iscreated = this.dialogue.open(CreateformComponent, {
      width: '500px',
    });
    iscreated.afterClosed().subscribe((result) => {
      if (result) {
        this.tableData.updateChecklistonCreaterecord();
      }
    });
  }
  openConfirmation() {
    let deleteConfirm = this.dialogue.open(ConfirmdeleteComponent, {
      width: '400px',
    });
    deleteConfirm.afterClosed().subscribe((result) => {
      if (result) {
        console.log(this.checkList);
        let idlist = [];
        for (let i = 0; i < this.checkList.length; i++) {
          if (this.checkList[i] === true) {
            idlist.push(this.records[i].id);
          }
        }
        for (let id of idlist) {
          let idTOBeDeleted = id;
          this.tableData.deleteRecord(idTOBeDeleted);
          this.api.deleteMitigationData(idTOBeDeleted).subscribe((res: any) => {
            console.log(res);
            this.avg.updatePreMitigaitonScore(res.preMitigationAvg);
            this.avg.updatePostMitigaitonScore(res.postMitigationAvg);
          });
        }
        this.tableData.updateChecklistonDeleterecord();
        this.enable.updateEnableCreate(true);
        this.enable.updateEnableDelete(false);
      }
    });
  }
}
