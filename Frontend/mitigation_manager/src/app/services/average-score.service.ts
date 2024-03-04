import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AverageScoreService {
  private avgPreMitigationScore = new BehaviorSubject<any>(2);
  currentPreMitigationScore= this.avgPreMitigationScore.asObservable();
  private avgPostMitigationScore = new BehaviorSubject<any>(2);
  currentPostMitigationScore= this.avgPostMitigationScore.asObservable();

  constructor() {}
  updatePreMitigaitonScore(newscore: any) {
    this.avgPreMitigationScore.next(newscore);
  }
  updatePostMitigaitonScore(newscore: any) {
    this.avgPostMitigationScore.next(newscore);
  }
}
