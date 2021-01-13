import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByTechnologyComponent } from './view-by-technology.component';

describe('ViewByTechnologyComponent', () => {
  let component: ViewByTechnologyComponent;
  let fixture: ComponentFixture<ViewByTechnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewByTechnologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewByTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
