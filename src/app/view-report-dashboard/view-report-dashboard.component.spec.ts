import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReportDashboardComponent } from './view-report-dashboard.component';

describe('ViewReportDashboardComponent', () => {
  let component: ViewReportDashboardComponent;
  let fixture: ComponentFixture<ViewReportDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReportDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReportDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
