import { Component, OnInit } from '@angular/core';
import { AverageScoreService } from 'src/app/services/average-score.service';
@Component({
  selector: 'app-avg-mitigation-score',
  templateUrl: './avg-mitigation-score.component.html',
  styleUrls: ['./avg-mitigation-score.component.css'],
  standalone: true,
})
export class AvgMitigationScoreComponent implements OnInit{
  constructor(private avg:AverageScoreService){}
  avgPreMitigationScore:any;
  avgPostMitigationScore:any;
  ngOnInit(): void {
    this.avg.currentPreMitigationScore.subscribe(avgPreMitigationScore => this.avgPreMitigationScore=avgPreMitigationScore);
    this.avg.currentPostMitigationScore.subscribe(avgPostMitigationScore =>this.avgPostMitigationScore = avgPostMitigationScore);
  }

  
}
