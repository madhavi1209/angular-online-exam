import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByLevelComponent } from './view-by-level.component';

describe('ViewByLevelComponent', () => {
  let component: ViewByLevelComponent;
  let fixture: ComponentFixture<ViewByLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewByLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewByLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
