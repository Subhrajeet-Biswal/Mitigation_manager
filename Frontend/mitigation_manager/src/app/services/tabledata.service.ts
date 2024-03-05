import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TabledataService {
  private tableData = new BehaviorSubject<any>({});
  currentdata = this.tableData.asObservable();
  constructor() {}
  updateTableData(data: any) {
    this.tableData.next(data);
  }
}
