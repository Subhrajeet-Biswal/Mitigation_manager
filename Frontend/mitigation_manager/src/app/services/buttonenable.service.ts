import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ButtonenableService {
  private enableCreate = new BehaviorSubject<boolean>(true);
  currentEnableCreate = this.enableCreate.asObservable();
  private enableDelete = new BehaviorSubject<boolean>(false);
  currentEnableDelete = this.enableDelete.asObservable();
  constructor() {}
  updateEnableCreate(flag: any) {
    this.enableCreate.next(flag);
  }
  updateEnableDelete(flag: any) {
    this.enableDelete.next(flag);
  }
}
