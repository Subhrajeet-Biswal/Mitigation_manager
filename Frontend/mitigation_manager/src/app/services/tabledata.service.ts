import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TabledataService {
  private tableData = new BehaviorSubject<any>({});
  currentdata = this.tableData.asObservable();
  private checklist = new BehaviorSubject<any>([]);
  currentchecklist = this.checklist.asObservable();
  private allChecked = new BehaviorSubject<any>(false);
  currentallChecked = this.allChecked.asObservable();
  constructor() {}
  updateTableData(data: any) {
    this.tableData.next(data);
  }
  deleteRecord(id: any) {
    let currentdata = this.tableData.value;
    let filteredData = currentdata.filter((item: any) => {
      return item.id !== id;
    });
    this.tableData.next(filteredData);
    this.allChecked.next(false);
  }
  updateChecklistonCreaterecord() {
    let currentlist = this.checklist.value;
    currentlist.push(false);
    this.checklist.next(currentlist);
  }
  updateChecklistonDeleterecord() {
    let currentlist = this.checklist.value;
    currentlist = currentlist.filter((item: any) => {
      return item === false;
    });
    this.checklist.next(currentlist);
  }
  handleAllCheck(flag: boolean) {
    let currentlist = this.checklist.value;
    currentlist.fill(flag);
    this.checklist.next(currentlist);
  }
}
