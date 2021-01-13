import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByCustomComponent } from './view-by-custom.component';

describe('ViewByCustomComponent', () => {
  let component: ViewByCustomComponent;
  let fixture: ComponentFixture<ViewByCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewByCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewByCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
