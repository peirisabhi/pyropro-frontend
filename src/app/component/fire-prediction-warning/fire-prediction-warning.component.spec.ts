import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirePredictionWarningComponent } from './fire-prediction-warning.component';

describe('FirePredictionWarningComponent', () => {
  let component: FirePredictionWarningComponent;
  let fixture: ComponentFixture<FirePredictionWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirePredictionWarningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirePredictionWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
