import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireDetectionAlertsComponent } from './fire-detection-alerts.component';

describe('FireDetectionAlertsComponent', () => {
  let component: FireDetectionAlertsComponent;
  let fixture: ComponentFixture<FireDetectionAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireDetectionAlertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FireDetectionAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
