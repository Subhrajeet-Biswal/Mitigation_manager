import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgMitigationScoreComponent } from './avg-mitigation-score.component';

describe('AvgMitigationScoreComponent', () => {
  let component: AvgMitigationScoreComponent;
  let fixture: ComponentFixture<AvgMitigationScoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvgMitigationScoreComponent],
    });
    fixture = TestBed.createComponent(AvgMitigationScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
